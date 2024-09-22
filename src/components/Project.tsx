import React from 'react';
import { ProjectCardProps } from '../types';

type Props = {};

const ProjectCard = ({
  title,
  image,
  link,
  description,
  technologies,
}: ProjectCardProps) => {
  const badgeClass =
    'rounded-md text-center px-2 py-1 text-xs font-semibold bg-sky-700 text-white';

  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-4 md:flex-row overflow-x-auto">
      <div className="shrink-0">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            className="h-36 w-36 hover:translate-y-1"
            src={image}
            alt={`Project ${title}`}
            loading="lazy"
          />
        </a>
      </div>
      <div>
        <div className="flex flex-col items-center p-2 gap-y-2 md:flex-row">
          <a
            className="hover:text-cyan-400"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-xl font-semibold">{title}</div>
          </a>
          <div className="ml-3 flex gap-2">
            {technologies.map((tech, index) => (
              <div key={index} className={badgeClass}>
                {tech}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const ProjectComponent = (props: Props) => {
  const projects = [
    {
      title: 'No-helmet detection using yolov5',
      image: 'https://cdn-icons-png.flaticon.com/512/5234/5234748.png',
      link: 'https://github.com/camera-detects-helmet',
      description:
        'ระบบตรวจจับผู้ขับขี่รถจักรยานยนต์ที่ไม่สวมหมวนริภัย โดยใช้ ​YOLOv5 ในการตรวจจับและใช้ Go gin ในการสร้าง API สำหรับการติดต่อกับฐานข้อมูล MongoDB',
      technologies: ['YOLOv5', 'ML', 'Python', 'RestAPI', 'MongoDB'],
    },
    {
      title: 'POS MON',
      image: 'https://se-update.com/wp-content/uploads/2017/02/shop-icon.png',
      link: 'https://github.com/sSlotty/POS-MON',
      description:
        'ระบบการจัดการร้านค้าโดยใช้ PHP ในการเขียนระบบหลังบ้านสำหรับการเชื่อมต่อกับฐานข้อมูล MySQL และใช้ JavaScript, HTML, CSS ในการเขียนหน้าเว็บ',
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    },
    {
      title: 'Clinic Management',
      image: 'https://cdn-icons-png.flaticon.com/512/3209/3209074.png',
      link: 'https://github.com/sSlotty/clinic-api',
      description:
        'ระบบการจัดการคลินิก โดยใช้ React JS ในการเขียนหน้าเว็บและใช้ Flask Restful API ในการเชื่อมต่อกับฐานข้อมูล MongoDB',
      technologies: ['React JS', 'Flask', 'Restful API', 'MongoDB'],
    },
    {
      title: 'Hotel Management',
      image: 'https://cdn-icons-png.flaticon.com/512/3837/3837802.png',
      link: 'https://github.com/sSlotty/ResortManagement',
      description:
        'ระบบการจัดโรงแรม โดยใช้ Android Studio ในการเขียนแอพพลิเคชั่นและใช้ Flask Restful API ในการเชื่อมต่อกับฐานข้อมูล MongoDB',
      technologies: [
        'Android Studio',
        'Mobile',
        'Flask Restful API',
        'MongoDB',
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="mb-6 text-2xl font-bold">
        Recent{' '}
        <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
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
