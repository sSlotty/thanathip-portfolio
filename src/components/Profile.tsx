/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const SocialLinks = () => {
  const socialMedia = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/thanathip-chanasri-008b3a226/",
      icon: "🔗",
      color: "cyan",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCgeunsrWLOcqj5kfPuyUeOQ",
      icon: "📺",
      color: "pink",
    },
    {
      name: "GitHub",
      link: "https://github.com/sSlotty",
      icon: "💻",
      color: "purple",
    },
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {socialMedia.map((media) => (
        <Link key={media.name} to={{ pathname: media.link }} target="_blank">
          <div
            className={`
              glass-card px-4 py-3 brutal-hover cursor-pointer
              border-3 ${
                media.color === "cyan"
                  ? "border-neon-cyan hover:shadow-brutal-cyan"
                  : media.color === "pink"
                    ? "border-neon-pink hover:shadow-brutal-pink"
                    : "border-neon-purple hover:shadow-brutal-purple"
              }
              flex items-center gap-2
            `}
          >
            <span className="text-2xl">{media.icon}</span>
            <span className="font-bold text-white text-sm">{media.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

const ProfileComponent = (props: Props) => {
  const age = calculateAge(new Date("2000-11-14"));

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-12 lg:py-20 relative">
      {/* Geometric Background Elements */}
      <div className="geometric-shape geometric-circle text-neon-cyan absolute top-10 right-10 animate-float hidden lg:block" />
      <div className="geometric-shape geometric-square text-neon-purple absolute bottom-20 left-10 animate-tilt hidden lg:block" />

      <div className="grid lg:grid-cols-3 gap-6 relative z-10">
        {/* Main Hero Card - Large */}
        <div className="lg:col-span-2 glass-card-strong p-8 lg:p-10 brutal-border-cyan animate-slide-in-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              <span className="gradient-text-multi text-glow-cyan">
                THANATHIP CHANASRI
              </span>
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 bg-neon-cyan text-black font-bold text-sm border-3 border-black shadow-brutal-sm">
                BACKEND SOFTWARE ENGINEER
              </span>
              <span className="px-4 py-2 bg-neon-purple text-white font-bold text-sm border-3 border-black shadow-brutal-sm">
                PAYMENT SYSTEMS
              </span>
              <span className="px-4 py-2 bg-neon-pink text-white font-bold text-sm border-3 border-black shadow-brutal-sm">
                FINTECH
              </span>
            </div>
          </div>

          <p className="text-base lg:text-lg text-gray-200 leading-relaxed mb-6">
            Backend Software Engineer focused on{" "}
            <span className="text-neon-cyan font-bold">
              Enterprise Payment Systems
            </span>
            ,{" "}
            <span className="text-neon-purple font-bold">
              Distributed Architecture
            </span>
            , and{" "}
            <span className="text-neon-pink font-bold">
              Financial Technology
            </span>
            .
          </p>

          <p className="text-base text-gray-300 leading-relaxed mb-6">
            I design, develop, and support mission-critical banking systems that
            process high-volume financial transactions. My expertise includes{" "}
            <span className="font-semibold text-white">
              Java, Spring Boot, Kafka, PostgreSQL
            </span>
            , and production incident investigation across enterprise-scale
            environments.
          </p>

          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Currently building and maintaining payment platforms while
            continuously improving system reliability, performance, and
            operational excellence.
          </p>

          <p className="text-sm text-gray-400 mb-6">
            📍 Based in Bangkok, Thailand
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="mailto:thanathipch9@gmail.com"
              className="px-6 py-3 bg-neon-cyan text-black font-bold border-3 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all"
            >
              📧 Contact Me
            </a>
            <a
              href="#work-experiences"
              className="px-6 py-3 glass-card font-bold text-white border-3 border-neon-purple shadow-brutal-purple hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all"
            >
              👀 View Work
            </a>
            <a
              href="#about"
              className="px-6 py-3 glass-card font-bold text-white border-3 border-neon-pink shadow-brutal-pink hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all"
            >
              📖 About Me
            </a>
          </div>

          <SocialLinks />
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-1 flex flex-col gap-6 animate-slide-in-right">
          {/* Profile Image Card */}
          <div className="glass-card p-6 brutal-border-purple text-center">
            <div className="relative inline-block">
              <img
                className="rounded-2xl object-cover h-48 w-48 border-5 border-neon-purple shadow-glow-purple"
                src="profile.webp"
                alt="Thanathip Chanasri"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 bg-neon-yellow text-black px-3 py-1 font-black text-sm border-3 border-black shadow-brutal-sm animate-float">
                {age} YRS
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass-card p-6 brutal-border-pink">
            <h3 className="font-black text-xl mb-4 gradient-text-pink">
              QUICK STATS
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Experience</span>
                <span className="font-bold text-neon-cyan">1.5+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Projects</span>
                <span className="font-bold text-neon-purple">10+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Location</span>
                <span className="font-bold text-neon-pink">🇹🇭 Bangkok</span>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="glass-card p-4 brutal-border-yellow text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-glow-pulse"></div>
              <span className="font-bold text-white">Available for Work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
