import React from "react";
import { WorkExperience } from "../types"; // Import the types

type Props = {
  experiences: WorkExperience[];
};

function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
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
  const currentDate = new Date();
  const end = endDate || currentDate;
  const isActive = !endDate;

  const getBorderColor = (index: number) => {
    const colors = [
      "border-neon-cyan",
      "border-neon-purple",
      "border-neon-pink",
    ];
    return colors[index % colors.length];
  };

  return (
    <li className="relative mb-8 md:mb-12 animate-slide-in-left">
      {/* Desktop Layout - Logo on Left */}
      <div className="hidden md:flex gap-6">
        {/* Logo with Glow */}
        <div className="flex-shrink-0 relative">
          <div
            className={`z-10 flex items-center justify-center w-16 h-16 bg-white rounded-2xl border-3 ${getBorderColor(index)} shadow-brutal-sm`}
          >
            <img
              src={logoUrl}
              alt={altText}
              className="h-12 w-12 object-contain"
            />
          </div>
          {isActive && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-neon-green rounded-full border-3 border-black animate-glow-pulse"></div>
          )}
        </div>

        {/* Content Card */}
        <div
          className={`flex-1 glass-card-strong p-6 brutal-border-cyan brutal-hover border-3`}
        >
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                {companyName}
              </h3>
              <p className="text-lg font-bold gradient-text-cyan">{position}</p>
            </div>
            {isActive && (
              <span className="px-3 py-1 bg-neon-green text-black font-black text-xs border-3 border-black shadow-brutal-sm">
                CURRENT
              </span>
            )}
          </div>

          <time className="block mb-4 text-sm font-bold text-gray-300">
            📅 {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "Present"}
            <span className="ml-2 px-2 py-1 bg-black text-neon-yellow text-xs border-2 border-neon-yellow">
              {decomposeDates(startDate, end)}
            </span>
          </time>

          <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile Layout - Logo on Top Center */}
      <div className="md:hidden glass-card-strong p-5 brutal-border-cyan border-3">
        {/* Logo at Top Center */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div
              className={`z-10 flex items-center justify-center w-16 h-16 bg-white rounded-2xl border-3 ${getBorderColor(index)} shadow-brutal-sm`}
            >
              <img
                src={logoUrl}
                alt={altText}
                className="h-12 w-12 object-contain"
              />
            </div>
            {isActive && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green rounded-full border-2 border-black animate-glow-pulse"></div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-black text-white mb-2">{companyName}</h3>
          <p className="text-base font-bold gradient-text-cyan mb-2">
            {position}
          </p>
          {isActive && (
            <span className="inline-block px-3 py-1 bg-neon-green text-black font-black text-xs border-2 border-black shadow-brutal-sm mb-2">
              CURRENT
            </span>
          )}
        </div>

        <time className="block mb-4 text-xs font-bold text-gray-300 text-center">
          📅 {formatDate(startDate)} -{" "}
          {endDate ? formatDate(endDate) : "Present"}
          <br />
          <span className="inline-block mt-1 px-2 py-1 bg-black text-neon-yellow text-xs border-2 border-neon-yellow">
            {decomposeDates(startDate, end)}
          </span>
        </time>

        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line text-left">
          {description}
        </p>
      </div>
    </li>
  );
};

const TimelineWorkComponent = ({ experiences }: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-12 lg:py-16 relative">
      {/* Decorative Elements */}
      <div
        className="geometric-shape geometric-square text-neon-cyan absolute top-20 right-10 animate-tilt hidden lg:block"
        style={{ transform: "scale(0.3) rotate(45deg)" }}
      />

      <div className="mb-10 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          WORK <span className="gradient-text-multi">EXPERIENCE</span>
        </h2>
        <p className="text-gray-300 text-lg">
          My professional journey & achievements
        </p>
      </div>

      <ol className="relative z-10">
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
