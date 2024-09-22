import ProfileComponent from '../components/Profile';
import ProjectComponent from '../components/Project';
import SkillComponent from '../components/Skills';
import TimelineWorkComponent from '../components/TimelineWork';
import { WorkExperience } from '../types';

type Props = {};

const experiences: WorkExperience[] = [
  {
    companyName: 'SCB',
    logoUrl: 'https://www.saijai.tech/wp-content/uploads/2022/10/scb-logo.png',
    altText: 'scb_logo',
    position: 'Software Engineer Associate',
    startDate: new Date('2023-08-02'),
    description: `Develop the back-end system to verify the accuracy of payments before the actual deduction of funds. This includes tasks such as file verification, fee calculation, and sending information to the main system for fund deduction. Provide support for testing and modifying the system to meet business requirements, including checking logs and making adjustments in the SIT, UAT, and PRODUCTION environments.`,
  },
  {
    companyName: 'True Crop.',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/True_Corporation_%28Thailand%29.svg',
    altText: 'true_logo',
    position: 'Backend developer (Internship)',
    startDate: new Date('2022-06-01'),
    endDate: new Date('2022-09-30'),
    description: 'Learning about ELK Stack, Docker, and Golang.',
  },
];

const Index = (props: Props) => {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header */}
      <header className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-white text-3xl font-bold">THANATHIP C.</h1>
          <nav>
            <ul className="flex gap-x-3 font-medium text-gray-200">
              <li className="hover:text-white">
                <a
                  href="https://github.com/sSlotty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Profile Section */}
      <section className="h-[80vh] flex items-center justify-center">
        <div className="max-w-screen-lg w-full">
          <ProfileComponent />
        </div>
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
      <div id="work-experiences">
        <TimelineWorkComponent experiences={experiences} />
      </div>

      {/* Skills Section */}
      <SkillComponent />

      {/* Projects Section */}
      <ProjectComponent />

      {/* Footer Links */}
      <footer className="py-6">
        <ul className="flex justify-center gap-4">
          <li>
            <a
              href="mailto:thanathipch9@gmail.co,?subject=Contact%20Regarding%20Your%20Portfolio&body=Hello%20Thanathip%2C%20I%20would%20like%20to%20discuss%20with%20you."
              className="text-gray-400 hover:text-white"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Index;
