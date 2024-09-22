import React from 'react';
import { WorkExperience } from '../types'; // Import the types

type Props = {
  experiences: WorkExperience[];
};

function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

const decomposeDates = (start: Date, end: Date): string => {
  const days = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const day = days % 30;
  return `${years} years ${months} months ${day} days`;
};

const TimelineItem = ({ experience }: { experience: WorkExperience }) => {
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

  return (
    <li className="relative mb-8 flex sm:items-start">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-300">
          <img
            src={logoUrl}
            alt={altText}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="ml-4">
        <p className="text-lg font-semibold text-white">{companyName}</p>
        <div className="block mb-2 text-sm text-gray-400">{position}</div>
        <time className="block mb-2 text-sm text-gray-400">
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Now'} [
          {decomposeDates(startDate, end)}]
        </time>
        <p className="block text-base text-gray-500">{description}</p>
      </div>
    </li>
  );
};

const TimelineWorkComponent = ({ experiences }: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8">
      <p className="text-white text-3xl pb-10 font-bold">Work Experience</p>
      <ol className="space-y-8">
        {experiences.map((experience) => (
          <TimelineItem key={experience.companyName} experience={experience} />
        ))}
      </ol>
    </div>
  );
};

export default TimelineWorkComponent;
