import React from "react";
import ClayCard from "./ui/ClayCard";

type Props = {};

const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/sSlotty",
    accent: "violet" as const,
    glyph:
      "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/thanathip-chanasri-008b3a226/",
    accent: "sky" as const,
    glyph:
      "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCgeunsrWLOcqj5kfPuyUeOQ",
    accent: "pink" as const,
    glyph:
      "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z",
  },
];

const SocialLinks = () => (
  <div className="flex flex-wrap gap-3 preserve-3d">
    {socials.map((media) => (
      <a
        key={media.name}
        href={media.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-clay accent-${media.accent} !px-4 !py-2.5 !text-sm !rounded-2xl`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        >
          <path d={media.glyph} />
        </svg>
        {media.name}
      </a>
    ))}
  </div>
);

const ProfileComponent = (props: Props) => {
  const age = calculateAge(new Date("2000-11-14"));

  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-10 md:py-16 lg:py-20 relative">
      {/* Clay orbs floating in the same space as the shader blobs */}
      <div className="clay-orb accent-amber h-24 w-24 -top-6 right-2 animate-float-z hidden lg:block" />
      <div
        className="clay-orb accent-mint h-16 w-16 bottom-10 -left-10 animate-float-z hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="grid lg:grid-cols-3 gap-5 md:gap-6 relative z-10">
        {/* Main hero slab */}
        <ClayCard
          accent="violet"
          stageClassName="lg:col-span-2"
          className="p-7 md:p-9 lg:p-11"
          tilt={4}
        >
          <p className="chip-clay accent-mint mono !text-[0.62rem] !tracking-[0.2em] uppercase mb-5">
            Backend Engineer · Bangkok
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.03] tracking-tight mb-6 text-ink">
            <span className="text-pop" data-text="THANATHIP">
              THANATHIP
            </span>
            <br />
            <span className="text-pop" data-text="CHANASRI">
              CHANASRI
            </span>
          </h1>

          <div className="flex flex-wrap gap-2.5 mb-7 preserve-3d">
            <span className="chip-clay chip-solid accent-violet">
              Payment Systems
            </span>
            <span className="chip-clay accent-sky">Distributed Systems</span>
            <span className="chip-clay accent-pink">FinTech</span>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-ink/90 mb-4">
            I build and operate the systems that move money — high-volume
            enterprise payment platforms where a dropped transaction is never an
            option.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-ink-dim mb-4">
            Day to day that means{" "}
            <span className="text-ink font-extrabold">
              Java, Spring Boot, Kafka and PostgreSQL
            </span>
            : designing event-driven services, tuning queries that carry real
            traffic, and running root-cause analysis when production says
            otherwise.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-ink-dim mb-8 hidden md:block">
            Currently at SCB, improving reliability and throughput across
            mission-critical banking workflows.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 preserve-3d">
            <a
              href="mailto:thanathipch9@gmail.com"
              className="btn-clay btn-solid accent-violet"
            >
              Get in touch
            </a>
            <a href="#work-experiences" className="btn-clay accent-pink">
              View experience
            </a>
          </div>

          <SocialLinks />
        </ClayCard>

        {/* Depth column */}
        <div className="flex flex-col gap-5 md:gap-6">
          <ClayCard accent="pink" className="p-5 md:p-6" delay={80}>
            <div className="flex justify-center preserve-3d">
              <div className="relative">
                <img
                  className="rounded-[28px] object-cover h-40 w-40 md:h-48 md:w-48 shadow-[12px_16px_30px_-14px_rgba(255,123,156,0.7)]"
                  src="profile.webp"
                  alt="Thanathip Chanasri"
                  loading="lazy"
                />
                <span className="absolute -bottom-3 -right-3 chip-clay chip-solid accent-amber mono !text-[0.68rem]">
                  {age} YRS
                </span>
              </div>
            </div>
          </ClayCard>

          <ClayCard accent="sky" className="p-6" delay={160}>
            <h3 className="mono text-[0.64rem] tracking-[0.26em] uppercase text-ink-faint mb-4">
              Snapshot
            </h3>
            <dl className="space-y-3.5 text-sm">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-ink-dim">Experience</dt>
                <dd className="font-extrabold tint-violet">1.5+ Years</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-ink-dim">Projects</dt>
                <dd className="font-extrabold tint-pink">10+</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-ink-dim">Domain</dt>
                <dd className="font-extrabold tint-mint">Banking</dd>
              </div>
            </dl>
          </ClayCard>

          <ClayCard accent="mint" className="p-5" delay={240} tilt={4}>
            <div className="flex items-center justify-center gap-3">
              <span className="pulse-dot" />
              <span className="text-sm font-extrabold text-ink">
                Available for work
              </span>
            </div>
          </ClayCard>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
