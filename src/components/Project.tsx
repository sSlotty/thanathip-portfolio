import React from "react";
import { ProjectCardProps } from "../types";

type Props = {};

const ProjectCard = ({
  title,
  image,
  link,
  description,
  technologies,
  index,
}: ProjectCardProps & { index: number }) => {
  const getBorderStyle = (index: number) => {
    const styles = [
      "brutal-border-cyan",
      "brutal-border-purple",
      "brutal-border-pink",
      "brutal-border-yellow",
    ];
    return styles[index % styles.length];
  };

  return (
    <div
      className={`glass-card-strong ${getBorderStyle(index)} overflow-hidden brutal-hover group animate-scale-in`}
    >
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Image Section */}
        <div className="md:w-1/3 flex items-center justify-center bg-white rounded-xl p-6 border-3 border-black shadow-brutal-sm">
          <img
            className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 flex flex-col gap-4">
          {/* Title */}
          <a
            className="text-2xl md:text-3xl font-black text-white hover:gradient-text-cyan transition-all duration-200"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title} →
          </a>

          {/* Description */}
          <p className="text-base text-gray-300 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, techIndex) => {
              const colors = [
                "bg-neon-cyan text-black",
                "bg-neon-purple text-white",
                "bg-neon-pink text-white",
                "bg-neon-yellow text-black",
              ];
              return (
                <span
                  key={techIndex}
                  className={`px-3 py-1 text-xs md:text-sm font-bold border-3 border-black shadow-brutal-sm ${colors[techIndex % colors.length]}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>

          {/* View Project Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start px-4 py-2 bg-black text-white font-bold border-3 border-neon-cyan shadow-brutal-cyan hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all"
          >
            <span>View Project</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectComponent = (props: Props) => {
  const projects = [
    {
      title: "No-helmet detection using yolov5",
      image: "https://cdn-icons-png.flaticon.com/512/705/705668.png",
      link: "https://github.com/camera-detects-helmet",
      description:
        "ระบบตรวจจับผู้ขับขี่รถจักรยานยนต์ที่ไม่สวมหมวนริภัย โดยใช้ ​YOLOv5 ในการตรวจจับและใช้ Go gin ในการสร้าง API สำหรับการติดต่อกับฐานข้อมูล MongoDB",
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
      technologies: [
        "Android Studio",
        "Mobile",
        "Flask Restful API",
        "MongoDB",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-12 lg:py-16 relative">
      {/* Decorative Elements */}
      <div
        className="geometric-shape geometric-circle text-neon-pink absolute -top-10 -left-10 animate-float hidden lg:block"
        style={{ transform: "scale(0.4)" }}
      />

      <div className="mb-10 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          RECENT <span className="gradient-text-multi">PROJECTS</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Check out my latest work & experiments
        </p>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
