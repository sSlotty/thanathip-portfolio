import React from "react";

type Props = {};

const AboutComponent = (props: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-6 lg:px-3 py-8 md:py-12 lg:py-16 relative">
      {/* Decorative Elements */}
      <div
        className="geometric-shape geometric-circle text-neon-purple absolute top-20 -right-10 animate-float hidden lg:block"
        style={{ transform: "scale(0.5)" }}
      />

      <div className="mb-6 md:mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3">
          ABOUT <span className="gradient-text-multi">ME</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Background, experience & aspirations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 relative z-10">
        {/* Main About Card */}
        <div className="glass-card-strong p-5 md:p-6 lg:p-8 brutal-border-cyan animate-slide-in-left border-3">
          <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 flex items-center gap-2">
            <span className="text-2xl md:text-3xl">👨‍💻</span>
            Professional Background
          </h3>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-neon-cyan font-bold">
                Software Engineer
              </span>{" "}
              with experience developing and supporting{" "}
              <span className="font-semibold text-white">
                enterprise banking and payment systems
              </span>
              . My daily responsibilities include backend development,
              transaction processing, system integration, performance
              optimization, and production incident investigation.
            </p>
            <p>
              I enjoy solving complex technical problems, especially those
              involving{" "}
              <span className="text-neon-purple font-bold">
                distributed systems
              </span>
              ,{" "}
              <span className="text-neon-pink font-bold">
                transaction workflows
              </span>
              , and{" "}
              <span className="text-neon-yellow font-bold">
                high-volume data processing
              </span>
              .
            </p>
            <p>
              Beyond coding, I am passionate about{" "}
              <span className="font-semibold text-white">
                root cause analysis
              </span>
              ,{" "}
              <span className="font-semibold text-white">
                system reliability
              </span>
              , and improving operational efficiency.
            </p>
          </div>
        </div>

        {/* Goals & Interests Card */}
        <div className="glass-card-strong p-5 md:p-6 lg:p-8 brutal-border-purple animate-slide-in-right border-3">
          <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 flex items-center gap-2">
            <span className="text-2xl md:text-3xl">🎯</span>
            Goals & Aspirations
          </h3>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>
              My goal is to grow into a{" "}
              <span className="text-neon-cyan font-bold">Technical Lead</span>{" "}
              and eventually build technology products that create meaningful
              impact.
            </p>
            <p className="text-sm text-gray-400 italic">
              "I believe great software is built through continuous learning,
              collaboration, and a deep understanding of both technical and
              business domains."
            </p>
          </div>

          {/* Quick Facts */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-bold text-white">Current Focus</p>
                <p className="text-sm text-gray-400">
                  Enterprise Payment Systems at SCB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-bold text-white">Interests</p>
                <p className="text-sm text-gray-400">
                  Distributed Systems, System Design, DevOps
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-bold text-white">Currently Learning</p>
                <p className="text-sm text-gray-400">
                  Advanced Kafka, System Architecture Patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-4 md:mt-6 lg:mt-8 glass-card-strong p-5 md:p-6 lg:p-8 brutal-border-pink animate-scale-in border-3">
        <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6 text-center">
          <span className="gradient-text-multi">CORE VALUES</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-1 md:mb-2">🔍</div>
            <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">
              Problem Solving
            </h4>
            <p className="text-xs md:text-sm text-gray-400">
              Deep dive into challenges
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-1 md:mb-2">🛡️</div>
            <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">
              Reliability
            </h4>
            <p className="text-xs md:text-sm text-gray-400">
              Systems that work 24/7
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-1 md:mb-2">⚡</div>
            <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">
              Performance
            </h4>
            <p className="text-xs md:text-sm text-gray-400">
              Scale & efficiency
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-1 md:mb-2">🤝</div>
            <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">
              Collaboration
            </h4>
            <p className="text-xs md:text-sm text-gray-400">Work with teams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
