import { lazy, Suspense } from "react";
import ProfileComponent from "../components/Profile";
import ProjectComponent from "../components/Project";
import SkillComponent from "../components/Skills";
import TimelineWorkComponent from "../components/TimelineWork";
import AboutComponent from "../components/About";
import useReveal from "../hooks/useReveal";
import { WorkExperience } from "../types";

/* Split out of the main bundle: the backdrop is decorative, its setup is
   already deferred to idle, and the CSS gradient stands in until it loads. */
const ShaderBackground = lazy(() => import("../webgl/ShaderBackground"));

type Props = {};

const experiences: WorkExperience[] = [
  {
    companyName: "Siam Commercial Bank (SCB)",
    logoUrl: "/scb-logo.jpg",
    logoSrcSet: "/scb-logo-64.jpg 1x, /scb-logo.jpg 3x",
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
    /* Self-hosted: the Wikimedia copy was the last third-party origin on the
       page, served with no cache lifetime, and could change or block hotlinks
       at any time. */
    logoUrl: "/true-logo.svg",
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

const NAV = [
  { label: "Home", href: "#hero", accent: "violet" },
  { label: "About", href: "#about", accent: "violet" },
  { label: "Experience", href: "#work-experiences", accent: "pink" },
  { label: "Skills", href: "#skills", accent: "sky" },
  { label: "Projects", href: "#projects", accent: "amber" },
];

const Index = (props: Props) => {
  useReveal();

  return (
    <div className="min-h-screen relative">
      <Suspense fallback={null}>
        <ShaderBackground />
      </Suspense>

      <header className="nav-shell sticky top-0 z-50">
        <div className="mx-auto max-w-screen-lg px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
          <a href="#hero" className="group flex items-baseline gap-2">
            <span
              className="text-lg md:text-xl font-extrabold tracking-tight text-pop is-flat"
              data-text="THANATHIP C."
            >
              THANATHIP C.
            </span>
          </a>

          <nav>
            <ul className="flex items-center gap-1 md:gap-2">
              {NAV.map((item) => (
                <li
                  key={item.href}
                  className={`accent-${item.accent} ${
                    item.href === "#hero" || item.href === "#skills"
                      ? "hidden md:block"
                      : ""
                  }`}
                >
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="accent-violet hidden sm:block">
                <a
                  href="https://github.com/sSlotty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clay btn-solid !py-2.5 !px-5 !text-sm !rounded-2xl"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="min-h-[92vh] flex items-center justify-center"
        >
          <div className="max-w-screen-lg w-full">
            <ProfileComponent />
          </div>
        </section>

        <section id="about">
          <AboutComponent />
        </section>

        <section id="work-experiences">
          <TimelineWorkComponent experiences={experiences} />
        </section>

        <section id="skills">
          <SkillComponent />
        </section>

        <section id="projects">
          <ProjectComponent />
        </section>
      </main>

      <footer className="relative bg-white/70 backdrop-blur-lg">
        <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3
                className="text-xl font-extrabold tracking-tight text-pop is-flat mb-3"
                data-text="THANATHIP C."
              >
                THANATHIP C.
              </h3>
              <p className="text-sm text-ink-dim leading-relaxed">
                Backend Engineer — enterprise payment systems and financial
                technology.
              </p>
            </div>

            <div>
              <h4 className="mono text-[0.64rem] tracking-[0.26em] uppercase text-ink-faint mb-4">
                Navigate
              </h4>
              <ul className="space-y-1 -ml-3">
                {NAV.slice(1).map((item) => (
                  <li key={item.href} className={`accent-${item.accent}`}>
                    <a href={item.href} className="nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mono text-[0.64rem] tracking-[0.26em] uppercase text-ink-faint mb-4">
                Get in touch
              </h4>
              <ul className="space-y-1 -ml-3">
                <li className="accent-violet">
                  <a href="mailto:thanathipch9@gmail.com" className="nav-link">
                    Email
                  </a>
                </li>
                <li className="accent-sky">
                  <a
                    href="https://github.com/sSlotty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    GitHub
                  </a>
                </li>
                <li className="accent-pink">
                  <a
                    href="https://www.linkedin.com/in/thanathip-chanasri-008b3a226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-ink-faint/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="mono text-[0.7rem] text-ink-faint">
              © {new Date().getFullYear()} Thanathip Chanasri
            </p>
            <p className="mono text-[0.7rem] text-ink-faint">
              React · TypeScript · WebGL
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
