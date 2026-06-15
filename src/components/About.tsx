import React from 'react';

type Props = {};

const AboutComponent = (props: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-12 lg:py-16 relative">
      {/* Decorative Elements */}
      <div 
        className="geometric-shape geometric-circle text-neon-purple absolute top-20 -right-10 animate-float hidden lg:block" 
        style={{ transform: 'scale(0.5)' }} 
      />
      
      <div className="mb-10 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          ABOUT <span className="gradient-text-multi">ME</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Background, experience & aspirations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 relative z-10">
        {/* Main About Card */}
        <div className="glass-card-strong p-8 brutal-border-cyan animate-slide-in-left">
          <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">👨‍💻</span>
            Professional Background
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I am a <span className="text-neon-cyan font-bold">Software Engineer</span> with experience developing and supporting <span className="font-semibold text-white">enterprise banking and payment systems</span>. My daily responsibilities include backend development, transaction processing, system integration, performance optimization, and production incident investigation.
            </p>
            <p>
              I enjoy solving complex technical problems, especially those involving <span className="text-neon-purple font-bold">distributed systems</span>, <span className="text-neon-pink font-bold">transaction workflows</span>, and <span className="text-neon-yellow font-bold">high-volume data processing</span>.
            </p>
            <p>
              Beyond coding, I am passionate about <span className="font-semibold text-white">root cause analysis</span>, <span className="font-semibold text-white">system reliability</span>, and improving operational efficiency.
            </p>
          </div>
        </div>

        {/* Goals & Interests Card */}
        <div className="glass-card-strong p-8 brutal-border-purple animate-slide-in-right">
          <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">🎯</span>
            Goals & Aspirations
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              My goal is to grow into a <span className="text-neon-cyan font-bold">Technical Lead</span> and eventually build technology products that create meaningful impact.
            </p>
            <p className="text-sm text-gray-400 italic">
              "I believe great software is built through continuous learning, collaboration, and a deep understanding of both technical and business domains."
            </p>
          </div>

          {/* Quick Facts */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-bold text-white">Current Focus</p>
                <p className="text-sm text-gray-400">Enterprise Payment Systems at SCB</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-bold text-white">Interests</p>
                <p className="text-sm text-gray-400">Distributed Systems, System Design, DevOps</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-bold text-white">Currently Learning</p>
                <p className="text-sm text-gray-400">Advanced Kafka, System Architecture Patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-8 glass-card-strong p-8 brutal-border-pink animate-scale-in">
        <h3 className="text-2xl font-black text-white mb-6 text-center">
          <span className="gradient-text-multi">CORE VALUES</span>
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🔍</div>
            <h4 className="font-bold text-white mb-2">Problem Solving</h4>
            <p className="text-sm text-gray-400">Deep dive into technical challenges</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🛡️</div>
            <h4 className="font-bold text-white mb-2">Reliability</h4>
            <p className="text-sm text-gray-400">Build systems that work 24/7</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h4 className="font-bold text-white mb-2">Performance</h4>
            <p className="text-sm text-gray-400">Optimize for scale & efficiency</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🤝</div>
            <h4 className="font-bold text-white mb-2">Collaboration</h4>
            <p className="text-sm text-gray-400">Work effectively with teams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
