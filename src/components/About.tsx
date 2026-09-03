import React from "react";
import ClayCard from "./ui/ClayCard";
import SectionHeading from "./ui/SectionHeading";
import type { Accent } from "./ui/ClayCard";

type Props = {};

const values: { label: string; detail: string; accent: Accent; glyph: string }[] =
  [
    {
      label: "Problem Solving",
      detail: "Deep dive into challenges",
      accent: "violet",
      glyph:
        "M11 3a8 8 0 1 0 5.29 14l4.35 4.36 1.41-1.42-4.35-4.35A8 8 0 0 0 11 3Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z",
    },
    {
      label: "Reliability",
      detail: "Systems that work 24/7",
      accent: "sky",
      glyph:
        "M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 2.2 6 2.2V11c0 4-2.5 7.8-6 9-3.5-1.2-6-5-6-9V6.4l6-2.2Z",
    },
    {
      label: "Performance",
      detail: "Scale & efficiency",
      accent: "amber",
      glyph: "M13 2 3 14h7l-1 8 10-12h-7l1-8Z",
    },
    {
      label: "Collaboration",
      detail: "Work with teams",
      accent: "pink",
      glyph:
        "M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 1a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-2.7 0-8 1.3-8 4v3h9v-3c0-1 .4-2 1.2-2.8A13 13 0 0 0 8 14Zm8 0c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5Z",
    },
  ];

const facts: { label: string; detail: string; accent: Accent }[] = [
  {
    label: "Current Focus",
    detail: "Enterprise Payment Systems at SCB",
    accent: "violet",
  },
  {
    label: "Interests",
    detail: "Distributed Systems, System Design, DevOps",
    accent: "sky",
  },
  {
    label: "Currently Learning",
    detail: "Advanced Kafka, System Architecture Patterns",
    accent: "pink",
  },
];

const AboutComponent = (props: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-14 md:py-20 relative">
      <SectionHeading
        index="01 / About"
        lead="ABOUT"
        highlight="ME"
        accent="violet"
        subtitle="Background, experience and where I am pointed next."
      />

      <div className="grid lg:grid-cols-2 gap-5 md:gap-6 relative z-10">
        <ClayCard accent="violet" className="p-7 md:p-8">
          <span className="chip-clay accent-violet mono !text-[0.62rem] !tracking-[0.2em] uppercase mb-5">
            Background
          </span>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-ink-dim">
            <p>
              I am a{" "}
              <span className="text-ink font-extrabold">Software Engineer</span>{" "}
              working on enterprise banking and payment systems — backend
              development, transaction processing, system integration,
              performance optimization and production incident investigation.
            </p>
            <p>
              The problems I enjoy most sit in{" "}
              <span className="tint-violet font-extrabold">
                distributed systems
              </span>
              ,{" "}
              <span className="tint-pink font-extrabold">
                transaction workflows
              </span>{" "}
              and{" "}
              <span className="tint-amber font-extrabold">
                high-volume data processing
              </span>
              .
            </p>
            <p>
              Beyond writing code, I care about root cause analysis, system
              reliability and operational efficiency — the parts that decide
              whether a platform holds up at 3am.
            </p>
          </div>
        </ClayCard>

        <ClayCard accent="pink" className="p-7 md:p-8" delay={100}>
          <span className="chip-clay accent-pink mono !text-[0.62rem] !tracking-[0.2em] uppercase mb-5">
            Goals
          </span>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-ink-dim">
            <p>
              My goal is to grow into a{" "}
              <span className="tint-violet font-extrabold">Technical Lead</span>{" "}
              and eventually build technology products that create meaningful
              impact.
            </p>
            <blockquote className="rounded-3xl bg-surface-2 px-5 py-4 text-ink/80 italic shadow-clay-press">
              “Great software is built through continuous learning,
              collaboration, and a deep understanding of both technical and
              business domains.”
            </blockquote>
          </div>

          <dl className="mt-7 space-y-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className={`accent-${fact.accent} flex items-start gap-3`}
              >
                <span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-[var(--accent)] shadow-[inset_-1px_-2px_3px_rgba(0,0,0,0.2),inset_1px_2px_3px_rgba(255,255,255,0.5)]" />
                <div>
                  <dt className="font-extrabold text-ink text-sm">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-ink-dim">{fact.detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </ClayCard>
      </div>

      <ClayCard
        accent="amber"
        stageClassName="mt-5 md:mt-6"
        className="p-7 md:p-9"
        tilt={3}
        delay={160}
      >
        <h3 className="text-center text-xl md:text-2xl font-extrabold text-ink mb-7">
          Core{" "}
          <span className="text-pop" data-text="Values">
            Values
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 preserve-3d">
          {values.map((value) => (
            <div
              key={value.label}
              className={`accent-${value.accent} text-center`}
            >
              <div className="clay-well mx-auto mb-4 h-16 w-16">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-[var(--accent)]"
                  aria-hidden="true"
                >
                  <path d={value.glyph} />
                </svg>
              </div>
              <h4 className="font-extrabold text-ink text-sm mb-1">
                {value.label}
              </h4>
              <p className="text-xs text-ink-dim">{value.detail}</p>
            </div>
          ))}
        </div>
      </ClayCard>
    </div>
  );
};

export default AboutComponent;
