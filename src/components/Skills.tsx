interface SkillsProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

interface SkillCategory {
  category: string;
  skills: Array<{ name: string; level: number }>;
}

export default function Skills({ registerSection, isDark }: SkillsProps) {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Programming',
      skills: [
        { name: 'C', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
      ],
    },
    {
      category: 'Engineering',
      skills: [
        { name: 'Basic Electronics', level: 80 },
        { name: 'Simple Circuits', level: 75 },
        { name: 'Electric Measurements', level: 70 },
        { name: 'Wiring & Connections', level: 80 },
      ],
    },

    {
      category: 'Thinking & Learning',
      skills: [
        { name: 'Quick Learner', level: 95 },
        { name: 'Problem Solving', level: 80 },
        { name: 'Teamwork', level: 85 },
        { name: 'Communication', level: 90 },
      ],
    },
    {
      category: 'Tools',
      skills: [
    { name: 'Git', level: 80 },
    { name: 'VS Code', level: 97 },
    { name: 'Wordpress', level: 95 },
    { name: 'Github', level: 90 },
      ],
    },
  ];

  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-slate-300';
  const textPrimary = isDark ? 'text-slate-200' : 'text-slate-800';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const progressBg = isDark ? 'bg-slate-800' : 'bg-slate-300';

  return (
    <section
      id="skills"
      ref={(el) => registerSection('skills', el)}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${cardBg} backdrop-blur-sm p-8 rounded-xl border transition-all`}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${textPrimary}`}>{skill.name}</span>
                      <span className={textSecondary}>{skill.level}%</span>
                    </div>
                    <div className={`w-full ${progressBg} rounded-full h-2 overflow-hidden`}>
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
