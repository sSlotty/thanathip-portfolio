import React from "react";
import { SkillCategoryProps } from "../types";

type Props = {};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  const getBorderColor = (title: string) => {
    if (title === "Backend Development") return "brutal-border-cyan";
    if (title === "Event Streaming & Messaging") return "brutal-border-purple";
    if (title === "Database") return "brutal-border-pink";
    if (title === "Reporting & Document Generation")
      return "brutal-border-yellow";
    if (title === "Data Integration & ETL") return "brutal-border-cyan";
    if (title === "DevOps & Infrastructure") return "brutal-border-purple";
    if (title === "Monitoring & Troubleshooting") return "brutal-border-pink";
    return "brutal-border-cyan";
  };

  const getBadgeColor = (title: string, index: number) => {
    if (title === "Backend Development") {
      return index % 2 === 0
        ? "bg-neon-cyan text-black"
        : "bg-black text-neon-cyan border-neon-cyan";
    }
    if (title === "Event Streaming & Messaging") {
      return index % 2 === 0
        ? "bg-neon-purple text-white"
        : "bg-black text-neon-purple border-neon-purple";
    }
    if (title === "Database") {
      return index % 2 === 0
        ? "bg-neon-pink text-white"
        : "bg-black text-neon-pink border-neon-pink";
    }
    if (title === "Reporting & Document Generation") {
      return index % 2 === 0
        ? "bg-neon-yellow text-black"
        : "bg-black text-neon-yellow border-neon-yellow";
    }
    if (title === "Data Integration & ETL") {
      return index % 2 === 0
        ? "bg-neon-cyan text-black"
        : "bg-black text-neon-cyan border-neon-cyan";
    }
    if (title === "DevOps & Infrastructure") {
      return index % 2 === 0
        ? "bg-neon-purple text-white"
        : "bg-black text-neon-purple border-neon-purple";
    }
    if (title === "Monitoring & Troubleshooting") {
      return index % 2 === 0
        ? "bg-neon-pink text-white"
        : "bg-black text-neon-pink border-neon-pink";
    }
    return index % 2 === 0
      ? "bg-neon-cyan text-black"
      : "bg-black text-neon-cyan border-neon-cyan";
  };

  const getEmojiForLevel = (title: string) => {
    if (title === "Backend Development") return "⚙️";
    if (title === "Event Streaming & Messaging") return "📡";
    if (title === "Database") return "🗄️";
    if (title === "Reporting & Document Generation") return "📄";
    if (title === "Data Integration & ETL") return "🔄";
    if (title === "DevOps & Infrastructure") return "🚀";
    if (title === "Monitoring & Troubleshooting") return "📊";
    return "💻";
  };

  return (
    <div
      className={`glass-card-strong p-5 md:p-6 ${getBorderColor(title)} brutal-hover animate-slide-up border-3`}
    >
      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
        <span className="text-3xl md:text-4xl">{getEmojiForLevel(title)}</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`
              px-3 md:px-4 py-1.5 md:py-2 font-bold text-xs md:text-sm lg:text-base
              border-2 md:border-3 border-black
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
    "RESTful API",
    "Microservices Architecture",
    "Batch Processing",
  ];

  const messagingSkills = [
    "Apache Kafka",
    "Event-Driven Architecture",
    "Asynchronous Processing",
    "Distributed Systems",
  ];

  const databaseSkills = [
    "PostgreSQL",
    "SQL Optimization",
    "Query Performance Tuning",
    "Database Partitioning",
    "Transaction Management",
  ];

  const reportingSkills = [
    "JasperReports",
    "Jasper Studio",
    "PDF Report Generation",
    "Dynamic Report Design",
    "Report Performance Optimization",
    "Pre-compiled Template Management",
  ];

  const dataIntegrationSkills = [
    "Azure Data Factory (ADF)",
    "Data Pipeline Design",
    "Data Migration",
    "Data Transformation",
    "Scheduled Data Processing",
    "File-based Integration (CSV, TXT)",
  ];

  const devopsSkills = [
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitLab CI/CD",
    "Linux",
    "Shell Script",
  ];

  const monitoringSkills = [
    "Kibana",
    "ELK Stack",
    "Log Analysis",
    "Root Cause Analysis (RCA)",
    "Production Incident Investigation",
    "Performance Analysis",
  ];

  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-8 md:py-12 lg:py-16 relative">
      {/* Decorative Elements */}
      <div
        className="geometric-shape geometric-triangle text-neon-yellow absolute top-0 right-20 animate-float hidden lg:block"
        style={{ transform: "scale(0.5)" }}
      />

      <div className="mb-6 md:mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3">
          <span className="gradient-text-multi">TECHNICAL SKILLS</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Enterprise Payment Systems & Financial Technology
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 relative z-10">
        <SkillCategory title="Backend Development" skills={backendSkills} />
        <SkillCategory
          title="Event Streaming & Messaging"
          skills={messagingSkills}
        />
        <SkillCategory title="Database" skills={databaseSkills} />
        <SkillCategory
          title="Reporting & Document Generation"
          skills={reportingSkills}
        />
        <SkillCategory
          title="Data Integration & ETL"
          skills={dataIntegrationSkills}
        />
        <SkillCategory title="DevOps & Infrastructure" skills={devopsSkills} />
        <SkillCategory
          title="Monitoring & Troubleshooting"
          skills={monitoringSkills}
        />
      </div>
    </div>
  );
};

export default SkillComponent;
