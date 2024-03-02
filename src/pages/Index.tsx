import { Link } from 'react-router-dom';
import ProfileComponent from '../components/Profile';
import SkillComponent from '../components/Skills';
import TimelineWorkComponent from '../components/TimelineWork';
import CertificateComponent from '../components/Certificate';
import React from 'react';
import ProjectComponent from '../components/Project';

type Props = {};

const Index = (props: Props) => {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            <p className="text-white text-3xl">THANATHIP C.</p>
          </div>
          <nav>
            <ul className="flex gap-x-3 font-medium text-gray-200">
              <li className="hover:text-white">
                <Link
                  to={{ pathname: 'https://github.com/sSlotty' }}
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="h-[100vh] sm:h-[90vh] md:h-[80vh] lg:h-[80vh]">
        <div className="max-h-full">
          <ProfileComponent />
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-3 py-6 invisible lg:visible">
        <div className="flex justify-center relative pb-1">
          <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-hero-line" />
          <div className="bg-slate-900 px-4 py-2 relative">
            <a href="#techskill">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63616 2.66663 2.66663 8.63616 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-neutral-600"
                />
                <path
                  d="M11.2933 14.3199L16 19.0133L20.7067 14.3199"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-neutral-600"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div id="techskill">
        <SkillComponent />
      </div>

      <ProjectComponent />
      <TimelineWorkComponent />

      {/* <CertificateComponent /> */}

      <ul>
        <li>
          <Link to={'/infomation'}>Infomation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
