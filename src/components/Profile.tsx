/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const SocialLinks = () => {
  const socialMedia = [
    {
      name: 'Twitter',
      link: '#',
      icon: 'https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/twitter-icon.png',
    },
    {
      name: 'Facebook',
      link: '#',
      icon: 'https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/facebook-icon.png',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/thanathip-chanasri-008b3a226/',
      icon: 'https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/linkedin-icon.png',
    },
    {
      name: 'YouTube',
      link: 'https://www.youtube.com/channel/UCgeunsrWLOcqj5kfPuyUeOQ',
      icon: 'https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/youtube-icon.png',
    },
  ];

  return (
    <div className="mt-3 flex gap-1">
      {socialMedia.map((media) => (
        <Link key={media.name} to={{ pathname: media.link }} target="_blank">
          <img
            className="h-12 w-12 hover:translate-y-1"
            src={media.icon}
            alt={`${media.name} icon`}
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
};

const ProfileComponent = (props: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6 text-white">
      <div className="flex flex-col items-center lg:flex-row md:justify-between md:gap-x-24">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-white animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
            Hi there, I'm{' '}
            <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Thanathip
            </span>{' '}
            👋 🎉
          </h1>
          <p className="mt-6 text-xl leading-9">
            I'm Thanathip Chansri from Bangkok/Thailand, I was born on 14 Nov
            2000, Now I'm {calculateAge(new Date('2000-11-14'))} years old.
          </p>
          <p className="text-xl leading-9">
            I'm a graduate with a Bachelor's degree in Computer Science from{' '}
            <Link
              className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
              to={{ pathname: 'https://www.swu.ac.th/' }}
              target="_blank"
            >
              Srinakharinwirot University
            </Link>
            .
          </p>
          <SocialLinks />
        </div>
        <div className="shrink-0 mt-6 lg:mt-0">
          <img
            width="80px"
            height="80px"
            className="rounded-full object-cover h-80 w-80"
            src="profile.webp"
            alt="Avatar image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
