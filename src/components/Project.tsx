import React from "react";
import ClayCard from "./ui/ClayCard";
import SectionHeading from "./ui/SectionHeading";
import type { Accent } from "./ui/ClayCard";

type Props = {};

type Project = {
  title: string;
  image: string;
  link: string;
  description: string;
  technologies: string[];
};

const ACCENTS: Accent[] = ["violet", "pink", "sky", "amber"];

const PROJECTS: Project[] = [
  {
    title: "No-helmet detection using YOLOv5",
    image: "https://cdn-icons-png.flaticon.com/512/705/705668.png",
    link: "https://github.com/camera-detects-helmet",
    description:
      "ระบบตรวจจับผู้ขับขี่รถจักรยานยนต์ที่ไม่สวมหมวกนิรภัย โดยใช้ YOLOv5 ในการตรวจจับ และใช้ Go Gin ในการสร้าง API สำหรับการติดต่อกับฐานข้อมูล MongoDB",
    technologies: ["YOLOv5", "ML", "Python", "RestAPI", "MongoDB"],
  },
  {
    title: "POS MON",
    image: "https://cdn-icons-png.freepik.com/512/4990/4990333.png",
    link: "https://github.com/sSlotty/POS-MON",
    description:
      "ระบบการจัดการร้านค้าโดยใช้ PHP ในการเขียนระบบหลังบ้านสำหรับการเชื่อมต่อกับฐานข้อมูล MySQL และใช้ JavaScript, HTML, CSS ในการเขียนหน้าเว็บ",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Clinic Management",
    image: "https://cdn-icons-png.freepik.com/512/4521/4521401.png",
    link: "https://github.com/sSlotty/clinic-api",
    description:
      "ระบบการจัดการคลินิก โดยใช้ React JS ในการเขียนหน้าเว็บและใช้ Flask Restful API ในการเชื่อมต่อกับฐานข้อมูล MongoDB",
    technologies: ["React JS", "Flask", "Restful API", "MongoDB"],
  },
  {
    title: "Hotel Management",
    image: "https://cdn-icons-png.flaticon.com/512/3837/3837802.png",
    link: "https://github.com/sSlotty/ResortManagement",
    description:
      "ระบบการจัดโรงแรม โดยใช้ Android Studio ในการเขียนแอพพลิเคชั่นและใช้ Flask Restful API ในการเชื่อมต่อกับฐานข้อมูล MongoDB",
    technologies: ["Android Studio", "Mobile", "Flask Restful API", "MongoDB"],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <ClayCard
      accent={accent}
      className="p-6 md:p-7 group"
      tilt={6}
      delay={(index % 2) * 90}
    >
      <div className="flex flex-col sm:flex-row gap-5 md:gap-6 h-full">
        {/* The artwork sits nearest the viewer inside the panel. */}
        <div className="sm:w-32 md:w-36 flex-shrink-0 preserve-3d">
          <div className="clay-well aspect-square p-6 transition-transform duration-500 group-hover:translate-z-24">
            <img
              className="h-full w-full object-contain"
              src={project.image}
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-ink">
              {project.title}
            </h3>
            <span className="mono text-[0.6rem] tracking-[0.28em] text-ink-faint pt-1.5">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="text-sm md:text-[0.95rem] leading-relaxed text-ink-dim">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip-clay !py-1 !px-3 !text-[0.7rem]">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clay !py-2.5 !px-5 !text-sm !rounded-2xl self-start mt-3"
          >
            View project
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2L11.6 6.4 13 5Z" />
            </svg>
          </a>
        </div>
      </div>
    </ClayCard>
  );
};

const ProjectComponent = (props: Props) => (
  <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-14 md:py-20 relative">
    <SectionHeading
      index="04 / Work"
      lead="RECENT"
      highlight="PROJECTS"
      accent="amber"
      subtitle="Side builds and experiments, from computer vision to store management."
    />

    <div className="grid lg:grid-cols-2 gap-4 md:gap-5 relative z-10">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </div>
);

export default ProjectComponent;
