import { useEffect, useRef } from "react";

type TiltOptions = {
  /** Maximum rotation in degrees on each axis. */
  max?: number;
  /** How far the raised inner layers push towards the viewer, in px. */
  lift?: number;
};

/**
 * Pointer-driven tilt. Writes --rx/--ry (rotation) and --mx/--my (specular
 * highlight position) onto the element; the CSS in index.css does the rest.
 * Skipped entirely on touch devices and when reduced motion is requested.
 */
export const useTilt = <T extends HTMLElement>({
  max = 7,
  lift = 18,
}: TiltOptions = {}) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduceMotion.matches) return;

    el.style.setProperty("--lift", `${lift}px`);

    let frame = 0;
    let pending: { x: number; y: number } | null = null;

    const apply = () => {
      frame = 0;
      if (!pending) return;
      el.style.setProperty("--rx", `${(0.5 - pending.y) * max}deg`);
      el.style.setProperty("--ry", `${(pending.x - 0.5) * max}deg`);
      el.style.setProperty("--mx", `${pending.x * 100}%`);
      el.style.setProperty("--my", `${pending.y * 100}%`);
    };

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      pending = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onEnter = () => el.classList.add("is-tilting");

    const onLeave = () => {
      el.classList.remove("is-tilting");
      pending = null;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "50%");
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max, lift]);

  return ref;
};

export default useTilt;
