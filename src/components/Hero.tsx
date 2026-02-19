import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImg from '../assets/myself.jpg'


interface HeroProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

export default function Hero({ registerSection, isDark }: HeroProps) {
  const textColorPrimary = isDark ? 'text-slate-300' : 'text-slate-700';
  const bgButton = isDark ? 'bg-slate-800 hover:bg-cyan-500' : 'bg-slate-200 hover:bg-blue-500';

  return (
    <section
      id="home"
      ref={(el) => registerSection('home', el)}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-8 flex justify-center">
          <img
            src= {profileImg}
            alt="Profile"
            className="w-64 h-64 rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            AAKASH THAKUR
          </span>
        </h1>
        <p className={`text-2xl md:text-3xl ${textColorPrimary} mb-8 font-light`}>
           Student, Developer & Tech Enthusiast
        </p>
        <p className={`text-lg md:text-xl ${textColorPrimary} mb-12 max-w-2xl mx-auto`}>
          Passionate about creating innovative solutions through code and engineering excellence
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/aakash01-git"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 ${bgButton} rounded-full transition-all hover:scale-110`}
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/aakashthakur001/"
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-4 ${bgButton} rounded-full transition-all hover:scale-110`}
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=aakash.bkt09@gmail.com&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 ${bgButton} rounded-full transition-all hover:scale-110`}
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="text-cyan-400" />
        </button>
      </div>
    </section>
  );
}
