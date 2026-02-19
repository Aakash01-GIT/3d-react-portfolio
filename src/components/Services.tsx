import React from 'react';

interface ServicesProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

const servicesList = [
  { id: 1, title: 'Responsive Web Design', desc: 'Adaptive layouts for all devices.' },
  { id: 2, title: 'UI/UX Design', desc: 'User-centered interfaces and flows.' },
  { id: 3, title: 'Frontend Development', desc: 'React, TypeScript and performant code.' },
  { id: 4, title: 'Website Optimization', desc: 'Performance, accessibility and SEO.' },
  { id: 5, title: 'Data Entry', desc: 'Accurate and timely data management.' },
  { id: 6, title: 'Website Maintenance', desc: 'Updates, backups and routine checks.' },
];

export default function Services({ registerSection, isDark }: ServicesProps) {
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-slate-200';
  const textColor = isDark ? 'text-white' : 'text-slate-950';

  return (
    <section
      id="services"
      ref={(el) => registerSection('services', el)}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
        </h2>

        <p className={`mb-10 text-lg md:text-xl font-medium ${textColor}`}>
          I offer a range of services to help you build and maintain great web experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s) => (
            <div
              key={s.id}
              className={`p-6 rounded-xl border ${cardBg} hover:scale-105 transition-transform`}>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{s.title}</h3>
              <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
