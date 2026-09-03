import React from "react";
import ClayCard from "./ui/ClayCard";
import SectionHeading from "./ui/SectionHeading";
import type { Accent } from "./ui/ClayCard";

type Props = {};

type Category = {
  title: string;
  accent: Accent;
  /** Single-path icon, drawn on a 24x24 grid. */
  glyph: string;
  skills: string[];
};

const CATEGORIES: Category[] = [
  {
    title: "Backend Development",
    accent: "violet",
    glyph: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "RESTful API",
      "Microservices Architecture",
      "Batch Processing",
    ],
  },
  {
    title: "Event Streaming & Messaging",
    accent: "sky",
    glyph: "M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm-4.9-2.9L5.7 5.7a9 9 0 0 0 0 12.6l1.4-1.4a7 7 0 0 1 0-9.8Zm9.8 0a7 7 0 0 1 0 9.8l1.4 1.4a9 9 0 0 0 0-12.6l-1.4 1.4ZM9.9 9.9 8.5 8.5a5 5 0 0 0 0 7l1.4-1.4a3 3 0 0 1 0-4.2Zm4.2 0a3 3 0 0 1 0 4.2l1.4 1.4a5 5 0 0 0 0-7l-1.4 1.4Z",
    skills: [
      "Apache Kafka",
      "Event-Driven Architecture",
      "Asynchronous Processing",
      "Distributed Systems",
    ],
  },
  {
    title: "Database",
    accent: "pink",
    glyph: "M12 2C7.6 2 4 3.3 4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5c0-1.7-3.6-3-8-3Zm0 2c3.9 0 6 1.1 6 1s-2.1 1-6 1-6-1.1-6-1 2.1-1 6-1Zm6 15c0 .1-2.1 1-6 1s-6-.9-6-1v-2.3A16 16 0 0 0 12 18a16 16 0 0 0 6-1.3V19Zm0-5c0 .1-2.1 1-6 1s-6-.9-6-1v-2.3A16 16 0 0 0 12 13a16 16 0 0 0 6-1.3V14Zm-6-3c-3.9 0-6-.9-6-1V6.7A16 16 0 0 0 12 8a16 16 0 0 0 6-1.3V10c0 .1-2.1 1-6 1Z",
    skills: [
      "PostgreSQL",
      "SQL Optimization",
      "Query Performance Tuning",
      "Database Partitioning",
      "Transaction Management",
    ],
  },
  {
    title: "Reporting & Document Generation",
    accent: "amber",
    glyph: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm4 18H6V4h7v5h5v11ZM8 13h8v2H8v-2Zm0 4h8v2H8v-2Z",
    skills: [
      "JasperReports",
      "Jasper Studio",
      "PDF Report Generation",
      "Dynamic Report Design",
      "Report Performance Optimization",
      "Pre-compiled Template Management",
    ],
  },
  {
    title: "Data Integration & ETL",
    accent: "violet",
    glyph: "M12 4V1L8 5l4 4V6a6 6 0 0 1 6 6c0 1-.3 2-.7 2.8l1.5 1.5A8 8 0 0 0 12 4Zm0 14a6 6 0 0 1-6-6c0-1 .3-2 .7-2.8L5.2 7.7A8 8 0 0 0 12 20v3l4-4-4-4v3Z",
    skills: [
      "Azure Data Factory (ADF)",
      "Data Pipeline Design",
      "Data Migration",
      "Data Transformation",
      "Scheduled Data Processing",
      "File-based Integration (CSV, TXT)",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    accent: "sky",
    glyph: "M12 2 3 6.5v11L12 22l9-4.5v-11L12 2Zm0 2.3 6.5 3.2L12 10.7 5.5 7.5 12 4.3ZM5 9.3l6 3v7.2l-6-3V9.3Zm8 10.2v-7.2l6-3v7.2l-6 3Z",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI/CD",
      "Linux",
      "Shell Script",
    ],
  },
  {
    title: "Monitoring & Troubleshooting",
    accent: "pink",
    glyph: "M3 3v18h18v-2H5V3H3Zm5 12h2v-4H8v4Zm4 0h2V7h-2v8Zm4 0h2v-6h-2v6Z",
    skills: [
      "Kibana",
      "ELK Stack",
      "Log Analysis",
      "Root Cause Analysis (RCA)",
      "Production Incident Investigation",
      "Performance Analysis",
    ],
  },
];

const SkillCategory = ({
  category,
  index,
}: {
  category: Category;
  index: number;
}) => (
  <ClayCard
    accent={category.accent}
    className="p-6 md:p-7"
    tilt={5}
    delay={(index % 2) * 80}
  >
    <div className="flex items-center gap-4 mb-5 preserve-3d">
      <span className="clay-well h-14 w-14 flex-shrink-0">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-[var(--accent)]"
          aria-hidden="true"
        >
          <path d={category.glyph} />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="mono text-[0.6rem] tracking-[0.28em] text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-ink">
          {category.title}
        </h3>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 preserve-3d">
      {category.skills.map((skill) => (
        <span key={skill} className="chip-clay">
          {skill}
        </span>
      ))}
    </div>
  </ClayCard>
);

const SkillComponent = (props: Props) => (
  <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-14 md:py-20 relative">
    <SectionHeading
      index="03 / Stack"
      lead="TECHNICAL"
      highlight="SKILLS"
      accent="sky"
      subtitle="The toolkit behind enterprise payment systems and financial technology."
    />

    <div className="grid md:grid-cols-2 gap-4 md:gap-5 relative z-10">
      {CATEGORIES.map((category, index) => (
        <SkillCategory
          key={category.title}
          category={category}
          index={index}
        />
      ))}
    </div>
  </div>
);

export default SkillComponent;
