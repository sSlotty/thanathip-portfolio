import React from "react";
import { WorkExperience } from "../types";
import ClayCard from "./ui/ClayCard";
import SectionHeading from "./ui/SectionHeading";

type Props = {
  experiences: WorkExperience[];
};

type Accent = "violet" | "pink" | "sky";
const ACCENTS: Accent[] = ["violet", "pink", "sky"];

function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  return `${day} ${month} ${date.getFullYear()}`;
}

const decomposeDates = (start: Date, end: Date): string => {
  const days = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
  );
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const day = days % 30;

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  if (day > 0 && years === 0) parts.push(`${day} day${day > 1 ? "s" : ""}`);

  return parts.join(", ") || "0 days";
};

type Block =
  | { kind: "heading"; text: string }
  | { kind: "text"; text: string }
  | { kind: "list"; marker: "bullet" | "check"; items: string[] }
  | { kind: "stack"; items: string[] };

/**
 * The descriptions are authored as plain text with "•" bullets, "✓" wins and a
 * trailing "Tech Stack:" line. Parsing them into blocks lets the panel present
 * real lists and chips instead of one pre-wrapped paragraph.
 */
const parseDescription = (description: string): Block[] => {
  const blocks: Block[] = [];

  description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      if (/^tech stack:/i.test(line)) {
        blocks.push({
          kind: "stack",
          items: line
            .replace(/^tech stack:/i, "")
            .split("•")
            .map((item) => item.trim())
            .filter(Boolean),
        });
        return;
      }

      const marker =
        line.startsWith("•") ? "bullet" : line.startsWith("✓") ? "check" : null;

      if (marker) {
        const item = line.slice(1).trim();
        const last = blocks[blocks.length - 1];
        if (last && last.kind === "list" && last.marker === marker) {
          last.items.push(item);
        } else {
          blocks.push({ kind: "list", marker, items: [item] });
        }
        return;
      }

      if (line.endsWith(":") && line === line.toUpperCase()) {
        blocks.push({ kind: "heading", text: line.replace(/:$/, "") });
        return;
      }

      blocks.push({ kind: "text", text: line });
    });

  return blocks;
};

const DescriptionBlocks = ({ blocks }: { blocks: Block[] }) => (
  <div className="space-y-4">
    {blocks.map((block, index) => {
      if (block.kind === "heading") {
        return (
          <h4
            key={index}
            className="chip-clay mono !text-[0.6rem] !tracking-[0.2em] uppercase mt-2"
          >
            {block.text}
          </h4>
        );
      }

      if (block.kind === "text") {
        return (
          <p key={index} className="text-sm md:text-base text-ink/85 leading-relaxed">
            {block.text}
          </p>
        );
      }

      if (block.kind === "stack") {
        return (
          <div key={index} className="flex flex-wrap gap-1.5 pt-1">
            {block.items.map((item) => (
              <span key={item} className="chip-clay !py-1 !px-3 !text-[0.7rem]">
                {item}
              </span>
            ))}
          </div>
        );
      }

      return (
        <ul key={index} className="space-y-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm md:text-[0.95rem] text-ink-dim leading-relaxed"
            >
              <span
                aria-hidden="true"
                className={
                  block.marker === "check"
                    ? "mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-md bg-mint shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.6)]"
                    : "mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent)] opacity-70"
                }
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    })}
  </div>
);

const TimelineItem = ({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) => {
  const {
    companyName,
    logoUrl,
    altText,
    position,
    startDate,
    endDate,
    description,
  } = experience;
  const end = endDate || new Date();
  const isActive = !endDate;
  const accent = ACCENTS[index % ACCENTS.length];
  const blocks = parseDescription(description);

  return (
    <li className="relative mb-6 md:mb-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Node on the rail */}
        <div
          className={`accent-${accent} relative flex-shrink-0 self-center md:self-start perspective-near`}
        >
          <div className="clay-well h-20 w-20 p-3">
            <img
              src={logoUrl}
              alt={altText}
              className="h-full w-full object-contain rounded-xl"
              loading="lazy"
            />
          </div>
          {isActive && (
            <span className="absolute -top-1 -right-1">
              <span className="pulse-dot" />
            </span>
          )}
        </div>

        <ClayCard
          accent={accent}
          stageClassName="flex-1 min-w-0"
          className="p-5 md:p-7"
          tilt={4}
          delay={index * 80}
        >
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
                {companyName}
              </h3>
              <p className="text-[var(--accent)] font-extrabold">{position}</p>
            </div>
            {isActive && (
              <span className="chip-clay chip-solid accent-mint mono !text-[0.62rem] tracking-[0.18em] uppercase">
                Current
              </span>
            )}
          </div>

          <p className="mono text-[0.72rem] text-ink-faint mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>
              {formatDate(startDate)} — {endDate ? formatDate(endDate) : "Present"}
            </span>
            <span className="text-ink-faint/60">/</span>
            <span className="tint-amber">
              {decomposeDates(startDate, end)}
            </span>
          </p>

          <DescriptionBlocks blocks={blocks} />
        </ClayCard>
      </div>
    </li>
  );
};

const TimelineWorkComponent = ({ experiences }: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-14 md:py-20 relative">
      <SectionHeading
        index="02 / Experience"
        lead="WORK"
        highlight="EXPERIENCE"
        accent="pink"
        subtitle="Where I have shipped, and what held up in production."
      />

      <ol className="relative z-10">
        <span className="timeline-rail hidden md:block" aria-hidden="true" />
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.companyName}
            experience={experience}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
};

export default TimelineWorkComponent;
