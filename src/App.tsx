import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import CanvasBackground from './components/CanvasBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionsRef.current);
      const scrollPosition = window.scrollY + 100;

      for (const [id, element] of sections) {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const registerSection = (id: string, element: HTMLElement | null) => {
    sectionsRef.current[id] = element;
  };

  const bgColor = isDark ? 'bg-slate-950' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-slate-950';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} relative overflow-hidden`}>
      <CanvasBackground isDark={isDark} />
      <Navigation activeSection={activeSection} isDark={isDark} setIsDark={setIsDark} />
      <Hero registerSection={registerSection} isDark={isDark} />
      <About registerSection={registerSection} isDark={isDark} />
      <Skills registerSection={registerSection} isDark={isDark} />
      <Projects registerSection={registerSection} isDark={isDark} />
      <Services registerSection={registerSection} isDark={isDark} />
      <Gallery registerSection={registerSection} isDark={isDark} />
      <Contact registerSection={registerSection} isDark={isDark} />
    </div>
  );
}

export default App;
