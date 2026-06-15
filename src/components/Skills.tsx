import React from "react";
import { SkillCategoryProps } from "../types";

type Props = {};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  const getBorderColor = (title: string) => {
    if (title === "Backend") return "brutal-border-cyan";
    if (title === "Messaging & Streaming") return "brutal-border-purple";
    if (title === "Database") return "brutal-border-pink";
    if (title === "DevOps & Infrastructure") return "brutal-border-yellow";
    return "brutal-border-cyan";
  };

  const getBadgeColor = (title: string, index: number) => {
    if (title === "Backend") {
      return index % 2 === 0
        ? "bg-neon-cyan text-black"
        : "bg-black text-neon-cyan border-neon-cyan";
    }
    if (title === "Messaging & Streaming") {
      return index % 2 === 0
        ? "bg-neon-purple text-white"
        : "bg-black text-neon-purple border-neon-purple";
    }
    if (title === "Database") {
      return index % 2 === 0
        ? "bg-neon-pink text-white"
        : "bg-black text-neon-pink border-neon-pink";
    }
    if (title === "DevOps & Infrastructure") {
      return index % 2 === 0
        ? "bg-neon-yellow text-black"
        : "bg-black text-neon-yellow border-neon-yellow";
    }
    return index % 2 === 0
      ? "bg-neon-cyan text-black"
      : "bg-black text-neon-cyan border-neon-cyan";
  };

  const getEmojiForLevel = (title: string) => {
    if (title === "Backend") return "⚙️";
    if (title === "Messaging & Streaming") return "📡";
    if (title === "Database") return "🗄️";
    if (title === "DevOps & Infrastructure") return "🚀";
    if (title === "Monitoring & Observability") return "📊";
    return "💻";
  };

  return (
    <div
      className={`glass-card-strong p-6 ${getBorderColor(title)} brutal-hover animate-slide-up`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{getEmojiForLevel(title)}</span>
        <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`
              px-4 py-2 font-bold text-sm md:text-base border-3 border-black
              shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px]
              hover:shadow-brutal transition-all cursor-default
              ${getBadgeColor(title, index)}
            `}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillComponent = (props: Props) => {
  const backendSkills = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate",
    "REST API",
    "Microservices",
  ];

  const messagingSkills = [
    "Apache Kafka",
    "Event-Driven Architecture",
    "Asynchronous Processing",
  ];

  const databaseSkills = [
    "PostgreSQL",
    "SQL Optimization",
    "Database Design",
    "Performance Tuning",
    "Partitioning",
  ];

  const devopsSkills = [
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitLab CI/CD",
    "Linux",
  ];

  const observabilitySkills = [
    "Kibana",
    "ELK Stack",
    "Log Analysis",
    "Production Monitoring",
  ];

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-12 lg:py-16 relative">
      {/* Decorative Elements */}
      <div
        className="geometric-shape geometric-triangle text-neon-yellow absolute top-0 right-20 animate-float hidden lg:block"
        style={{ transform: "scale(0.5)" }}
      />

      <div className="mb-10 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          <span className="gradient-text-multi">TECH STACK</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Enterprise Payment Systems & Financial Technology
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Messaging & Streaming" skills={messagingSkills} />
        <SkillCategory title="Database" skills={databaseSkills} />
        <SkillCategory title="DevOps & Infrastructure" skills={devopsSkills} />
        <SkillCategory
          title="Monitoring & Observability"
          skills={observabilitySkills}
        />
      </div>
    </div>
  );
};

export default SkillComponent;
