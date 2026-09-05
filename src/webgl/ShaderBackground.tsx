import { useEffect, useRef } from "react";

/**
 * Hand-written WebGL backdrop — no three.js, no npm dependency.
 *
 * A full-screen quad raymarches a signed-distance field containing:
 *   - four clay blobs blended with a polynomial smooth-minimum
 *   - a jointed robot standing beside the content, which bobs, looks around,
 *     blinks and waves
 *   - an analytic ground plane that catches their soft shadows
 *
 * Shading is clay-like throughout: wrapped diffuse, a soft fill, ambient
 * occlusion, a wide rim and almost no specular. Falls back to the CSS gradient
 * on <body> if WebGL is unavailable.
 */

const VERTEX_SHADER = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  u_resolution;
uniform vec2  u_pointer;
uniform float u_time;
uniform float u_robotX;    /* world X of the robot, derived from aspect */
uniform float u_maxSteps;  /* march budget — lowered on phones */

const float FLOOR_Y = -1.95;
const float FAR = 16.0;

/* Per-frame scene state. The march samples the field ~130x per pixel, so
   every sin/cos hoisted out of the distance functions removes ~130
   transcendentals per pixel. setupScene() fills these once per fragment. */
vec3 gB0, gB1, gB2, gB3;
vec3 gRobotPos;
mat2 gBodyXZ, gBodyYZ, gHeadXZ, gHeadXY, gArmL, gArmR;
float gAntSway, gBlink;

/* Material ids */
const float M_BLOB  = 1.0;
const float M_SHELL = 2.0;
const float M_TRIM  = 3.0;
const float M_VISOR = 4.0;
const float M_EYE   = 5.0;

/* Clay palette */
const vec3 C0 = vec3(0.616, 0.549, 0.980);
const vec3 C1 = vec3(1.000, 0.549, 0.678);
const vec3 C2 = vec3(0.376, 0.812, 0.769);
const vec3 C3 = vec3(1.000, 0.757, 0.416);

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

void setupScene(float t) {
  gB0 = vec3(sin(t * 0.50) * 1.25, cos(t * 0.40) * 0.60, sin(t * 0.30) * 0.40);
  gB1 = vec3(cos(t * 0.37) * -1.35, sin(t * 0.46) * 0.72, cos(t * 0.28) * 0.35 - 0.30);
  gB2 = vec3(sin(t * 0.31 + 2.0) * 0.85, cos(t * 0.53 + 1.0) * -0.85, sin(t * 0.41) * 0.30 + 0.45);
  gB3 = vec3(cos(t * 0.26 + 1.5) * 1.45, sin(t * 0.33 + 2.5) * 0.50, cos(t * 0.36) * 0.35);

  /* Hover, with a slow turn that also leans toward the pointer. */
  gRobotPos = vec3(u_robotX, -0.30 + sin(t * 1.15) * 0.13, 0.15);
  gBodyXZ = rot(sin(t * 0.55) * 0.22 + u_pointer.x * 0.30);
  gBodyYZ = rot(sin(t * 0.90) * 0.05 - u_pointer.y * 0.10);

  /* The head gets its own tilt on top of the body's. */
  gHeadXZ = rot(sin(t * 0.80) * 0.20);
  gHeadXY = rot(sin(t * 0.65) * 0.07);

  /* The left arm sways; the right one waves in bursts. */
  float waveGate = smoothstep(0.05, 0.45, sin(t * 0.40) * 0.5 + 0.5);
  gArmL = rot(0.22 + sin(t * 1.1) * 0.13);
  gArmR = rot(-0.22 + waveGate * (-2.05 + sin(t * 5.6) * 0.42));

  gAntSway = sin(t * 1.6) * 0.07;

  /* Blink: a short window every ~4.5s squashes the lenses flat. */
  float phase = fract(t * 0.22);
  gBlink = smoothstep(0.02, 0.045, phase) * (1.0 - smoothstep(0.055, 0.08, phase));
}

/* Polynomial smooth minimum — what makes clay parts melt together. */
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float sdSphere(vec3 p, float r) {
  return length(p) - r;
}

float sdRoundBox(vec3 p, vec3 b, float r) {
  vec3 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r;
}

float sdCapsule(vec3 p, vec3 a, vec3 b, float r) {
  vec3 pa = p - a;
  vec3 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - r;
}

vec2 opU(vec2 a, vec2 b) {
  return a.x < b.x ? a : b;
}

float mapBlobs(vec3 p) {
  float d = length(p - gB0) - 0.88;
  d = smin(d, length(p - gB1) - 0.74, 0.55);
  d = smin(d, length(p - gB2) - 0.62, 0.50);
  d = smin(d, length(p - gB3) - 0.52, 0.45);
  return d;
}

/* Inverse-distance blend, so blob colour bleeds where they merge.
   length(v)^4 is exactly (v.v)^2 — same weights, without four sqrt and
   four pow. */
vec3 blobColor(vec3 p) {
  vec3 v0 = p - gB0;
  vec3 v1 = p - gB1;
  vec3 v2 = p - gB2;
  vec3 v3 = p - gB3;
  float q0 = dot(v0, v0);
  float q1 = dot(v1, v1);
  float q2 = dot(v2, v2);
  float q3 = dot(v3, v3);
  float w0 = 1.0 / (0.02 + q0 * q0);
  float w1 = 1.0 / (0.02 + q1 * q1);
  float w2 = 1.0 / (0.02 + q2 * q2);
  float w3 = 1.0 / (0.02 + q3 * q3);
  return (C0 * w0 + C1 * w1 + C2 * w2 + C3 * w3) / (w0 + w1 + w2 + w3);
}

/* ---- Robot -------------------------------------------------------------
   Built in its own local space, then placed at u_robotX. Every joint is a
   rotation applied to the sample point before the primitive is evaluated. */
vec2 mapRobot(vec3 p) {
  p -= gRobotPos;
  p.xz = gBodyXZ * p.xz;
  p.yz = gBodyYZ * p.yz;

  float body = sdRoundBox(p, vec3(0.34, 0.38, 0.26), 0.14);
  float base = sdRoundBox(p - vec3(0.0, -0.54, 0.0), vec3(0.24, 0.05, 0.18), 0.10);

  vec3 ph = p - vec3(0.0, 0.76, 0.0);
  ph.xz = gHeadXZ * ph.xz;
  ph.xy = gHeadXY * ph.xy;
  float head = sdRoundBox(ph, vec3(0.32, 0.26, 0.26), 0.12);

  vec3 pl = p - vec3(-0.44, 0.16, 0.0);
  pl.xy = gArmL * pl.xy;
  float armL = sdCapsule(pl, vec3(0.0), vec3(0.0, -0.40, 0.0), 0.085);
  float handL = sdSphere(pl - vec3(0.0, -0.45, 0.0), 0.105);

  vec3 pr = p - vec3(0.44, 0.16, 0.0);
  pr.xy = gArmR * pr.xy;
  float armR = sdCapsule(pr, vec3(0.0), vec3(0.0, -0.40, 0.0), 0.085);
  float handR = sdSphere(pr - vec3(0.0, -0.45, 0.0), 0.105);

  float shell = smin(body, head, 0.12);
  shell = smin(shell, base, 0.10);
  shell = smin(shell, armL, 0.07);
  shell = smin(shell, armR, 0.07);
  shell = smin(shell, handL, 0.05);
  shell = smin(shell, handR, 0.05);

  vec2 res = vec2(shell, M_SHELL);

  /* Antenna, wobbling as the head moves. */
  vec3 pa = ph - vec3(0.0, 0.30, 0.0);
  float antenna = sdCapsule(pa, vec3(0.0), vec3(gAntSway, 0.22, 0.0), 0.022);
  float bulb = sdSphere(pa - vec3(gAntSway * 1.15, 0.27, 0.0), 0.062);
  res = opU(res, vec2(smin(antenna, bulb, 0.03), M_TRIM));

  /* Chest panel */
  float panel = sdRoundBox(p - vec3(0.0, 0.02, 0.34), vec3(0.16, 0.16, 0.02), 0.05);
  res = opU(res, vec2(panel, M_TRIM));

  /* Visor sits proud of the face; the lenses sit proud of the visor. */
  float visor = sdRoundBox(ph - vec3(0.0, 0.01, 0.36), vec3(0.21, 0.13, 0.02), 0.06);
  res = opU(res, vec2(visor, M_VISOR));

  vec3 pe = ph - vec3(0.0, 0.03, 0.43);
  pe.x = abs(pe.x) - 0.105;
  float lens = sdRoundBox(pe, vec3(0.030, mix(0.070, 0.008, gBlink), 0.010), 0.020);
  res = opU(res, vec2(lens, M_EYE));

  return res;
}

/* Everything that can be hit by a ray or cast a shadow (the floor is solved
   analytically instead, so it never enters the march).

   Bounding spheres around the two clusters were measured and reverted: the
   branch costs more than the skipped evaluation saves, because both sides get
   executed whenever neighbouring pixels disagree. */
vec2 mapObjects(vec3 p) {
  vec2 res = vec2(mapBlobs(p), M_BLOB);
  return opU(res, mapRobot(p));
}

/* Tetrahedron normals: four field taps where a central difference needs six. */
vec3 normalAt(vec3 p) {
  vec2 k = vec2(1.0, -1.0);
  float h = 0.0018;
  return normalize(
    k.xyy * mapObjects(p + k.xyy * h).x +
    k.yyx * mapObjects(p + k.yyx * h).x +
    k.yxy * mapObjects(p + k.yxy * h).x +
    k.xxx * mapObjects(p + k.xxx * h).x
  );
}

float softShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
  float res = 1.0;
  float ta = mint;
  for (int i = 0; i < 18; i++) {
    if (ta > maxt) break;
    float h = mapObjects(ro + rd * ta).x;
    if (h < 0.0015) return 0.0;
    res = min(res, k * h / ta);
    /* Already effectively black — the remaining steps cannot change it. */
    if (res < 0.006) break;
    ta += clamp(h, 0.07, 0.55);
  }
  return clamp(res, 0.0, 1.0);
}

float ambientOcclusion(vec3 p, vec3 n) {
  float occ = 0.0;
  float sca = 1.0;
  /* Four taps, spaced wider to cover the same reach as the old five. */
  for (int i = 0; i < 4; i++) {
    float h = 0.02 + 0.14 * float(i);
    occ += (h - mapObjects(p + n * h).x) * sca;
    sca *= 0.68;
  }
  return clamp(1.0 - 2.4 * occ, 0.0, 1.0);
}

vec3 background(vec2 uv) {
  vec3 top = vec3(0.976, 0.965, 1.000);
  vec3 bottom = vec3(0.902, 0.925, 1.000);
  vec3 col = mix(bottom, top, clamp(uv.y * 0.9 + 0.55, 0.0, 1.0));
  /* Warm bloom low-left, cool bloom high-right — keeps the field from
     reading as a flat wash. */
  col = mix(col, vec3(1.000, 0.914, 0.890), exp(-length(uv - vec2(-0.7, -0.5)) * 1.7) * 0.55);
  col = mix(col, vec3(0.882, 0.902, 1.000), exp(-length(uv - vec2(0.8, 0.6)) * 1.8) * 0.5);
  return col;
}

vec3 materialColor(float id, vec3 p) {
  if (id < 1.5) return blobColor(p);
  if (id < 2.5) return vec3(0.965, 0.960, 1.000);
  if (id < 3.5) return vec3(0.486, 0.424, 0.941);
  if (id < 4.5) return vec3(0.145, 0.120, 0.290);
  return vec3(0.210, 0.800, 0.720);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
  float t = u_time;
  setupScene(t);

  vec3 col = background(uv);

  /* Camera drifts with the pointer, always looking at the origin. */
  vec3 ro = vec3(u_pointer.x * 0.75, u_pointer.y * 0.55, 8.6);
  vec3 forward = normalize(-ro);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), forward));
  vec3 up = cross(forward, right);
  vec3 rd = normalize(uv.x * right + uv.y * up + 1.7 * forward);

  vec3 key = normalize(vec3(0.45, 0.85, 0.55));
  vec3 fillDir = normalize(vec3(-0.7, -0.15, 0.45));

  /* The ground plane is solved analytically, so background pixels never pay
     for it and the march keeps its bounding-sphere early-out. */
  float tFloor = FAR + 1.0;
  if (rd.y < -0.0001) {
    float cand = (FLOOR_Y - ro.y) / rd.y;
    if (cand > 0.0) tFloor = cand;
  }

  /* Bounding sphere around blobs + robot. */
  float bound = max(3.2, u_robotX + 1.5);
  float b = dot(ro, rd);
  float c = dot(ro, ro) - bound * bound;
  float disc = b * b - c;

  float tHit = -1.0;
  float hitId = 0.0;

  if (disc > 0.0) {
    float dist = max(-b - sqrt(disc), 0.0);
    float exit = -b + sqrt(disc);
    for (int i = 0; i < 96; i++) {
      if (float(i) > u_maxSteps) break;
      vec3 p = ro + rd * dist;
      vec2 h = mapObjects(p);
      if (h.x < 0.0016) {
        tHit = dist;
        hitId = h.y;
        break;
      }
      dist += h.x * 0.92;
      if (dist > exit || dist > FAR) break;
    }
  }

  if (tHit > 0.0 && tHit < tFloor) {
    vec3 p = ro + rd * tHit;
    vec3 n = normalAt(p);
    vec3 base = materialColor(hitId, p);

    float shadow = softShadow(p + n * 0.02, key, 0.03, 6.0, 12.0);
    float occ = ambientOcclusion(p, n);

    /* Wrapped diffuse: light bends around the terminator, which is what makes
       a matte lump read as clay rather than plastic. */
    float kd = clamp(dot(n, key) * 0.5 + 0.5, 0.0, 1.0);
    float kf = clamp(dot(n, fillDir) * 0.5 + 0.5, 0.0, 1.0);
    float rim = pow(1.0 - max(dot(n, -rd), 0.0), 2.6);
    float spec = pow(max(dot(reflect(-key, n), -rd), 0.0), 28.0);

    vec3 shaded = base * (0.50 + 0.64 * kd * kd * mix(0.45, 1.0, shadow));
    shaded += base * kf * 0.18;
    shaded *= mix(0.72, 1.0, occ);
    shaded += vec3(1.0) * rim * 0.26;

    /* The visor is glossy and the lenses glow; everything else stays matte. */
    if (hitId > 3.5 && hitId < 4.5) shaded += vec3(0.65, 0.75, 1.0) * spec * 0.55;
    else if (hitId > 4.5) shaded = base * 1.25 + vec3(0.3) * rim;
    else shaded += vec3(1.0) * spec * 0.12;

    float haze = smoothstep(6.6, 13.0, tHit);
    col = mix(shaded, col, haze * 0.68);
  } else if (tFloor < FAR) {
    vec3 p = ro + rd * tFloor;
    float shadow = softShadow(p + vec3(0.0, 0.02, 0.0), key, 0.08, 7.0, 9.0);
    vec3 floorCol = vec3(0.930, 0.940, 1.000) * mix(0.80, 1.0, shadow);
    /* Fade the plane out quickly so it reads as a soft studio ground rather
       than a horizon cutting across the page. */
    float fade = exp(-max(0.0, tFloor - 7.0) * 0.16);
    col = mix(col, floorCol, fade * 0.85);
  }

  /* A little grain keeps the pastel gradients from banding. */
  col += (hash(gl_FragCoord.xy + t) - 0.5) * 0.010;

  gl_FragColor = vec4(col, 1.0);
}
`;

const compile = (
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const gl = (canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
      /* Reduced motion draws a short burst, and WebGL discards the drawing
         buffer after each composite — without this the canvas would go black
         on the next repaint. Not worth the cost while animating. */
      preserveDrawingBuffer: reduceMotion,
    }) ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uPointer = gl.getUniformLocation(program, "u_pointer");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uRobotX = gl.getUniformLocation(program, "u_robotX");
    const uMaxSteps = gl.getUniformLocation(program, "u_maxSteps");

    /* Cost is pixels x frames x per-pixel work. The march keeps the last term
       high, so the first two are where the budget is won: render far below
       native resolution, and cap the rate — a slowly drifting backdrop does
       not need the display's full 60Hz, let alone 120Hz. */
    const TARGET_FPS = 30;
    const frameBudget = 1000 / TARGET_FPS;

    /* Quality tiers, best first. The watchdog below only ever steps down. */
    const desktopTiers = [
      { scale: 0.46, steps: 92 },
      { scale: 0.38, steps: 76 },
      { scale: 0.30, steps: 60 },
      { scale: 0.24, steps: 48 },
    ];
    const phoneTiers = [
      { scale: 0.32, steps: 48 },
      { scale: 0.26, steps: 40 },
      { scale: 0.20, steps: 34 },
    ];
    let tierIndex = 0;
    const tierList = () => (window.innerWidth < 768 ? phoneTiers : desktopTiers);
    const tier = () => {
      const list = tierList();
      return list[Math.min(tierIndex, list.length - 1)];
    };

    let frame = 0;
    let staticFrames = 0;
    let running = true;
    let lastDraw = 0;
    let slowFrames = 0;
    const start = performance.now();
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const applySize = (force: boolean) => {
      const { scale, steps } = tier();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(window.innerWidth * dpr * scale));
      const height = Math.max(1, Math.floor(window.innerHeight * dpr * scale));
      if (!force && canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uResolution, width, height);

      /* Park the robot just outside the content column: the visible half-width
         in world units is aspect * 2.53 at the scene's depth. */
      const aspect = width / height;
      gl.uniform1f(uRobotX, Math.min(3.6, Math.max(1.5, aspect * 2.53 * 0.78)));
      gl.uniform1f(uMaxSteps, steps);

      if (reduceMotion) {
        staticFrames = 0;
        if (running && !frame) frame = requestAnimationFrame(render);
      }
    };

    const render = (now?: number) => {
      frame = 0;
      if (!running) return;

      /* Queue the next frame before any early return, so a capped frame does
         not stop the loop. */
      if (!reduceMotion || staticFrames <= 8) {
        frame = requestAnimationFrame(render);
      }

      const stamp = now === undefined ? performance.now() : now;

      if (!reduceMotion) {
        /* 2ms of slack, so a frame that comes due just after a vsync is not
           pushed back a whole interval. */
        const since = stamp - lastDraw;
        if (since < frameBudget - 2) return;

        /* Watchdog: consistently missing the capped rate means the GPU is the
           bottleneck, so drop a tier. Steps down only — stepping back up would
           oscillate around the threshold. lastDraw is 0 after a pause, which
           is why that case is excluded rather than counted as slow. */
        if (lastDraw > 0 && since > frameBudget * 1.8) {
          if (++slowFrames > 20 && tierIndex < tierList().length - 1) {
            tierIndex++;
            slowFrames = 0;
            applySize(true);
          }
        } else if (slowFrames > 0) {
          slowFrames--;
        }
        lastDraw = stamp;
      }

      const elapsed = reduceMotion ? 6 : (stamp - start) / 1000;
      /* Ease towards the pointer so the camera glides instead of snapping.
         Tuned for the capped rate: at 30fps each frame covers twice the ground
         it did at 60. */
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.uniform1f(uTime, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      /* Only reveal the canvas once a frame has actually landed, so a failed
         context or shader leaves the CSS gradient showing instead of black. */
      canvas.classList.add("is-ready");
      /* Under reduced motion the image is static, so stop once a few frames
         have survived compositing rather than burning the GPU on a still. */
      if (reduceMotion) staticFrames++;
    };

    /* Resizing reallocates the drawing buffer, so coalesce the burst of events
       a drag produces into one resize per frame. */
    let resizeFrame = 0;
    const onResize = () => {
      if (resizeFrame) return;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        applySize(false);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.tx = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = 1 - (event.clientY / window.innerHeight) * 2;
    };

    applySize(true);
    render();

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        staticFrames = 0;
        /* Do not let the hidden gap count against the watchdog. */
        lastDraw = 0;
        slowFrames = 0;
        render();
      }
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      running = false;
      cancelAnimationFrame(frame);
      canvas.classList.add("is-lost");
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    canvas.addEventListener("webglcontextlost", onContextLost);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return (
    <div className="scene-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} className="scene-canvas" />
      <div className="scene-veil" />
    </div>
  );
};

export default ShaderBackground;
