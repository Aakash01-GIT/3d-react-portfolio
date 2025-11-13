import { ExternalLink, Github } from 'lucide-react';
import iotImage from '../assets/iot.jpg';
import mlImage from '../assets/ml.jpg';
import roboticsImage from '../assets/robotics.jpg';
import webappImage from '../assets/webapp.jpg';


interface ProjectsProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
}

export default function Projects({ registerSection, isDark }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: 'Smart IoT System',
      description: 'Developed an IoT-based monitoring system with real-time data visualization and automated controls using Arduino and cloud integration.',
      tags: ['IoT', 'Arduino', 'Cloud', 'Sensors'],
      github: 'https://github.com',
      image: iotImage,
    },
    {
      title: 'Machine Learning Model',
      description: 'Built a predictive analytics model for engineering applications with 95% accuracy using Python and TensorFlow.',
      tags: ['Python', 'ML', 'TensorFlow', 'Data Science'],
      github: 'https://github.com',
      image: mlImage,
    },
    {
      title: 'Robotics Project',
      description: 'Designed and programmed an autonomous robot for industrial applications with computer vision and path planning algorithms.',
      tags: ['Robotics', 'C++', 'Computer Vision', 'ROS'],
      github: 'https://github.com',
      image: roboticsImage,
    },
    {
      title: 'Web Application',
      description: 'Full-stack web application with modern UI/UX, real-time features, and secure authentication system.',
      tags: ['React', 'Node.js', 'Database', 'API'],
      github: 'https://github.com',
      live: 'https://aakash-thakur.netlify.app',
      image: webappImage,
    },
  ];

  const cardBg = isDark
    ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500'
    : 'bg-white/50 border-slate-300 hover:border-blue-500';
  const titleColor = isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-950 group-hover:text-blue-600';
  const descColor = isDark ? 'text-slate-300' : 'text-slate-700';
  const tagBg = isDark ? 'bg-slate-800 text-cyan-400' : 'bg-slate-300 text-blue-600';
  const linkColor = isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-blue-600';

  return (
    <section
      id="projects"
      ref={(el) => registerSection('projects', el)}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${cardBg} rounded-xl overflow-hidden border transition-all duration-300 hover:scale-105`}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${titleColor} transition-colors`}>
                  {project.title}
                </h3>
                <p className={`${descColor} mb-4 leading-relaxed`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-3 py-1 ${tagBg} text-sm rounded-full`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${linkColor} transition-colors`}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${linkColor} transition-colors`}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
