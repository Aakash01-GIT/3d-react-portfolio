import React from 'react';
import { Smartphone, Layout, Code, Zap, Database, RefreshCw } from 'lucide-react';

interface ServicesProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

const servicesList = [
  { id: 1, title: 'Responsive Web Design', desc: 'Adaptive layouts for all devices.', icon: Smartphone },
  { id: 2, title: 'UI/UX Design', desc: 'User-centered interfaces and flows.', icon: Layout },
  { id: 3, title: 'Frontend Development', desc: 'React, TypeScript and performant code.', icon: Code },
  { id: 4, title: 'Website Optimization', desc: 'Performance, accessibility and SEO.', icon: Zap },
  { id: 5, title: 'Data Entry', desc: 'Accurate and timely data management.', icon: Database },
  { id: 6, title: 'Website Maintenance', desc: 'Updates, backups and routine checks.', icon: RefreshCw },
];

export default function Services({ registerSection, isDark }: ServicesProps) {
  const cardBg = isDark ? 'bg-slate-900/60 border-transparent' : 'bg-white/60 border-transparent';
  const textColor = isDark ? 'text-white' : 'text-slate-950';

  return (
    <section
      id="services"
      ref={(el) => registerSection('services', el)}
      className="min-h-screen flex items-center py-20 px-6"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className={`mx-auto max-w-3xl mb-6 text-lg md:text-xl font-medium ${textColor}`}>
            I offer a range of professional services to build, improve and maintain fast, accessible and beautiful websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((s, idx) => {
            const Icon = (s as any).icon as React.ComponentType<any>;
            const delay = idx * 100;
            return (
              <div
                key={s.id}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-once="true"
                className="rounded-2xl p-1"
              >
                <div
                  className={`h-72 p-8 rounded-2xl ${cardBg} backdrop-blur-md shadow-lg border border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 ${isDark ? 'bg-gradient-to-tr from-cyan-600 to-blue-500' : 'bg-gradient-to-tr from-cyan-200 to-blue-300'}`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>{s.title}</h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{s.desc}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <li>• Quality-first approach</li>
                      <li>• Fast turnaround</li>
                      <li>• Responsive support</li>
                    </ul>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:opacity-95">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
