import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

export default function Contact({ registerSection, isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xnnlnbya', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aakash.bkt09@gmail.com',
      href: 'mailto:aakash.bkt09@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9805671956',
      href: 'tel:+9779805671956',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhaktapur, Nepal',
    },
  ];

  const bgSection = isDark ? 'bg-slate-900/30' : 'bg-slate-100/30';
  const textPrimary = isDark ? 'text-slate-300' : 'text-slate-700';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const inputBg = isDark ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-white/50 border-slate-300 text-slate-950';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500' : 'bg-white/50 border-slate-300 hover:border-blue-500';
  const borderColor = isDark ? 'border-slate-800' : 'border-slate-300';

  return (
    <section
      id="contact"
      ref={(el) => registerSection('contact', el)}
      className={`min-h-screen py-20 px-4 ${bgSection} relative z-10`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className={`text-lg ${textPrimary} mb-8 leading-relaxed`}>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className={`flex items-start gap-4 p-4 ${cardBg} backdrop-blur-sm rounded-xl border transition-all`}>
                    <Icon className="text-cyan-400 mt-1" size={24} />
                    <div>
                      <p className={`${textSecondary} text-sm`}>{info.label}</p>
                      <p className={isDark ? 'text-white' : 'text-slate-950'} style={{ fontSize: '1.125rem' }}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_captcha" value="false" /> {/* Optional for spam */}

            <div>
              <label htmlFor="name" className={`block ${textPrimary} mb-2`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 ${inputBg} border rounded-xl focus:border-cyan-500 focus:outline-none transition-colors`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block ${textPrimary} mb-2`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 ${inputBg} border rounded-xl focus:border-cyan-500 focus:outline-none transition-colors`}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block ${textPrimary} mb-2`}>
                Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className={`w-full px-4 py-3 ${inputBg} border rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none`}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : status === 'success' ? (
                'Message Sent!'
              ) : status === 'error' ? (
                'Error - Try Again'
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className={`mt-20 pt-8 border-t ${borderColor} text-center ${textSecondary}`}>
          <div className="mb-4 flex justify-center gap-6">
            {/* Social Icons */}
            <a href="https://github.com/aakash01-git" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-300">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.022c-3.338.726-4.033-1.608-4.033-1.608-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.554 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.804 5.625-5.476 5.921.43.372.815 1.103.815 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/aakashthakur001" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.034-1.848-3.034-1.849 0-2.133 1.445-2.133 2.939v5.664h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.37 4.268 5.455v6.284zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.066s.923-2.067 2.067-2.067c1.141 0 2.066.926 2.066 2.067 0 1.14-.925 2.066-2.066 2.066zM6.922 20.452H3.752V9h3.17v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.98 0 1.778-.774 1.778-1.729V1.729C24 .774 23.205 0 22.225 0z"/>
              </svg>
            </a>
            <a href="https://x.com/Aakash_77777777" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.165-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.93 4.93 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.055 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
              </svg>
            </a>
          </div>

          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            &copy; {new Date().getFullYear()} AAKASH THAKUR. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
