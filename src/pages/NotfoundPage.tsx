import React from "react";
import { Link } from "react-router-dom";
import ShaderBackground from "../webgl/ShaderBackground";
import ClayCard from "../components/ui/ClayCard";

type Props = {};

const NotfoundPage = (props: Props) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-16">
      <ShaderBackground />

      <ClayCard
        accent="pink"
        stageClassName="w-full max-w-xl"
        className="p-8 md:p-12 text-center"
        tilt={6}
        reveal={false}
      >
        <p className="chip-clay accent-pink mono !text-[0.62rem] !tracking-[0.24em] uppercase mb-7">
          Error · 404
        </p>

        <h1
          className="text-7xl md:text-8xl font-extrabold tracking-tight text-pop mb-6"
          data-text="404"
        >
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">
          This page drifted out of the scene
        </h2>

        <p className="text-sm md:text-base text-ink-dim mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist. It may have been moved or
          deleted.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-clay btn-solid accent-violet">
            Back home
          </Link>
          <a
            href="mailto:thanathipch9@gmail.com"
            className="btn-clay accent-pink"
          >
            Contact
          </a>
        </div>
      </ClayCard>
    </div>
  );
};

export default NotfoundPage;
