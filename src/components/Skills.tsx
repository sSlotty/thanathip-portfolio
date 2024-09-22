import React from 'react';
import { SkillCategoryProps } from '../types';

type Props = {};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto">
      <h1 className="text-2xl font-bold text-white w-32">{title}</h1>
      <div className="flex flex-col text-center items-center gap-y-2 md:flex-row">
        <div className="ml-3 flex gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillComponent = (props: Props) => {

  const proficientSkills = ['Python', 'Java', 'Web design'];
  const intermediateSkills = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'NodeJS',
    'C#',
    'API',
    'SQL',
  ];
  const beginnerSkills = ['Android', 'Go', 'Docker', 'K8s'];

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="mb-6 text-2xl font-bold">Technical Skill</div>
      <div className="flex flex-col gap-6">
        <SkillCategory title="Proficient" skills={proficientSkills} />
        <SkillCategory title="Intermediate" skills={intermediateSkills} />
        <SkillCategory title="Beginner" skills={beginnerSkills} />
      </div>
    </div>
  );
};

export default SkillComponent;
