import { Code, Cpu, Lightbulb, Rocket } from 'lucide-react';

interface AboutProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

export default function About({ registerSection, isDark }: AboutProps) {
  const highlights = [
    {
      icon: Code,
      title: 'Problem Solver',
      description: 'Passionate about solving complex engineering challenges with innovative solutions',
    },
    {
      icon: Cpu,
      title: 'Tech Enthusiast',
      description: 'Always exploring cutting-edge technologies and engineering practices',
    },
    {
      icon: Lightbulb,
      title: 'Creative Thinker',
      description: 'Combining technical expertise with creative problem-solving approaches',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and engineering methodologies',
    },
  ];

  const bgSection = isDark ? 'bg-slate-900/30' : 'bg-slate-100/30';
  const textPrimary = isDark ? 'text-slate-300' : 'text-slate-700';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-slate-300';
  const cardHover = isDark ? 'hover:border-cyan-500' : 'hover:border-blue-500';

  return (
    <section
      id="about"
      ref={(el) => registerSection('about', el)}
      className={`min-h-screen py-20 px-4 ${bgSection} relative z-10`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className={`text-lg ${textPrimary} leading-relaxed mb-6`}>
              I'm a dedicated engineering student with a passion for creating innovative solutions
              that make a difference. My journey in engineering has equipped me with strong
              analytical skills and a deep understanding of both theoretical concepts and practical applications.
            </p>
            <p className={`text-lg ${textPrimary} leading-relaxed mb-6`}>
              I specialize in combining hardware and software to build intelligent systems.
              From IoT projects to machine learning applications, I enjoy working on projects
              that push the boundaries of what's possible.
            </p>
            <p className={`text-lg ${textPrimary} leading-relaxed`}>
              When I'm not coding or building, you'll find me exploring new technologies,
              contributing to open-source projects, or collaborating with fellow engineers
              on exciting new ideas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`${cardBg} ${cardHover} backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <Icon className="text-cyan-400 mb-3" size={32} />
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${textSecondary}`}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
