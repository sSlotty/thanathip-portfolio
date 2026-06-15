import ProfileComponent from "../components/Profile";
import ProjectComponent from "../components/Project";
import SkillComponent from "../components/Skills";
import TimelineWorkComponent from "../components/TimelineWork";
import AboutComponent from "../components/About";
import { WorkExperience } from "../types";

type Props = {};

const experiences: WorkExperience[] = [
  {
    companyName: "Siam Commercial Bank (SCB)",
    logoUrl: "https://www.saijai.tech/wp-content/uploads/2022/10/scb-logo.png",
    altText: "scb_logo",
    position: "Software Engineer",
    startDate: new Date("2023-08-02"),
    description: `Enterprise Payment Processing Systems | Backend Development & System Optimization

KEY RESPONSIBILITIES:
• Develop and maintain enterprise payment processing systems
• Design and implement backend services using Java Spring Boot
• Integrate banking applications through Kafka-based event-driven architecture
• Optimize PostgreSQL database performance and transaction processing workflows
• Investigate and resolve production incidents affecting business-critical services
• Perform root cause analysis and provide technical recommendations for system improvements
• Collaborate with cross-functional teams including Business Analysts, DevOps Engineers, and Operations teams

KEY ACHIEVEMENTS:
✓ Improved transaction processing performance through SQL optimization and workflow analysis
✓ Led multiple production incident investigations and root cause analysis initiatives
✓ Enhanced system reliability by identifying and resolving transaction processing bottlenecks
✓ Contributed to large-scale payment platform enhancements supporting enterprise banking operations

Tech Stack: Java • Spring Boot • Spring Security • Spring Data JPA • Hibernate • PostgreSQL • Apache Kafka • Docker • Kubernetes • Jenkins • GitLab CI/CD • Kibana • ELK Stack`,
  },
  {
    companyName: "True Corporation",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/True_Corporation_%28Thailand%29.svg",
    altText: "true_logo",
    position: "Backend Developer (Internship)",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-07-31"),
    description: `Backend Development & Data Processing

• Developed Go applications for processing large-scale data files
• Implemented and configured ELK Stack (Elasticsearch, Logstash, Kibana) for data processing and admin reporting
• Built REST APIs to fetch data from Elasticsearch
• Tested network connectivity and performance optimization

Tech Stack: Go • Elasticsearch • Logstash • Kibana • REST API`,
  },
];

const Index = (props: Props) => {
  return (
    <div className="min-h-screen bg-grid-pattern relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-deep-space/80 border-b-3 border-neon-cyan shadow-brutal">
        <div className="mx-auto max-w-screen-lg px-3 py-4">
          <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-white text-2xl md:text-3xl font-black gradient-text-multi">
              THANATHIP C.
            </h1>
            <nav>
              <ul className="flex gap-x-2 lg:gap-x-4 font-bold text-xs lg:text-sm">
                <li>
                  <a
                    href="#hero"
                    className="px-2 lg:px-3 py-2 text-white hover:text-neon-cyan transition-all duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="px-2 lg:px-3 py-2 text-white hover:text-neon-purple transition-all duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#work-experiences"
                    className="px-2 lg:px-3 py-2 text-white hover:text-neon-pink transition-all duration-200"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="px-2 lg:px-3 py-2 text-white hover:text-neon-yellow transition-all duration-200"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="px-2 lg:px-3 py-2 text-white hover:text-neon-green transition-all duration-200"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sSlotty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 lg:px-4 py-2 bg-neon-cyan text-black font-black border-3 border-black shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero / Profile Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-dots-pattern relative"
      >
        <div className="max-w-screen-lg w-full">
          <ProfileComponent />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-grid-pattern">
        <AboutComponent />
      </section>

      {/* Scroll Down Indicator */}
      <div className="mx-auto max-w-screen-lg px-3 py-6 invisible lg:visible">
        <div className="flex justify-center relative pb-1">
          <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0" />
          <div className="bg-slate-900 px-4 py-2 relative">
            <a href="#work-experiences">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={14.6667}
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                />
                <path
                  d="M11.2933 14.3199L16 19.0133L20.7067 14.3199"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <section id="work-experiences" className="bg-dots-pattern">
        <TimelineWorkComponent experiences={experiences} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-grid-pattern">
        <SkillComponent />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-dots-pattern">
        <ProjectComponent />
      </section>

      {/* Footer */}
      <footer className="border-t-3 border-neon-purple bg-deep-space py-12">
        <div className="mx-auto max-w-screen-lg px-3">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-black gradient-text-multi mb-3">
                THANATHIP C.
              </h3>
              <p className="text-gray-400">
                Backend Engineer • Enterprise Payment Systems & Financial
                Technology
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-black text-white mb-3">
                QUICK LINKS
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#work-experiences"
                    className="text-gray-400 hover:text-neon-purple transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-neon-pink transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-neon-yellow transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-black text-white mb-3">
                GET IN TOUCH
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:thanathipch9@gmail.com"
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    📧 Email Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sSlotty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-purple transition-colors"
                  >
                    💻 GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/thanathip-chanasri-008b3a226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-pink transition-colors"
                  >
                    🔗 LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t-2 border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Thanathip Chanasri. Built with{" "}
              <span className="text-neon-pink">❤️</span> using React &
              TailwindCSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
