import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Navigation({ activeSection, isDark, setIsDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navBg = isDark
    ? 'bg-slate-950/80 border-slate-800'
    : 'bg-white/80 border-slate-200';
  const textColor = isDark ? 'text-slate-300' : 'text-slate-700';
  const activeColor = isDark ? 'text-cyan-400' : 'text-blue-600';
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-slate-950';

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${navBg} backdrop-blur-md border-b transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            AAKASH
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id ? activeColor : textColor
                } ${hoverColor}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'bg-slate-200 text-slate-950 hover:bg-slate-300'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden ${textColor}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden ${isDark ? 'bg-slate-900/95' : 'bg-slate-50/95'} backdrop-blur-md`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                  activeSection === item.id
                    ? isDark
                      ? 'text-cyan-400 bg-slate-800'
                      : 'text-blue-600 bg-slate-200'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
