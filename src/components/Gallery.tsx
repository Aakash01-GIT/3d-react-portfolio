import { useState } from 'react';
import { X } from 'lucide-react';
import mentorsphoto from '../assets/mentors1.jpg'
import mentorsphoto1 from '../assets/mentors2.jpg'
import sanyasi from '../assets/sanyasi.jpg'
import chandra from '../assets/chandra.jpg'
import muktinath from '../assets/muktinath.jpg'
import lake from '../assets/lake.jpg'
import marpha from '../assets/marpha.jpg'
import party from '../assets/party.jpg'
import tample0 from '../assets/temple.jpg'
import tample1 from '../assets/temple1.jpg'
import dada from '../assets/dada.jpg'
import college from '../assets/college.jpg'
import myphoto from '../assets/myself.jpg'
import fewa from '../assets/fewa.jpg'
import clz from '../assets/clz.jpg'


interface GalleryProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  isDark: boolean;
}

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

export default function Gallery({ registerSection, isDark }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const PASSWORD = '9805671956'; // Change this to your desired password

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      setAccessGranted(true);
    } else {
      alert('Incorrect password!');
      setPasswordInput('');
    }
  };

  const images: GalleryImage[] = [
    { id: 1, src: myphoto, title:'', category: 'Tour' },
    { id: 2, src: sanyasi, title: '', category: 'Hike' },
    { id: 3, src: chandra, title: '', category: 'Travel' },
    { id: 4, src: muktinath, title: '', category: 'Tour' },
    { id: 5, src: mentorsphoto , title: '', category: 'Learning' },
    { id: 6, src: lake, title: '', category: 'Tour' },
    { id: 7, src: marpha, title: '', category: 'Nature' },
    { id: 8, src: party, title: '', category: 'Party' },
    { id: 9, src: tample0, title: '', category: 'Temple' },
    { id: 10, src: tample1, title: '', category: 'Visit' },
    { id: 11, src: mentorsphoto1, title: '', category: 'Learning' },
    { id: 12, src: dada, title: '', category: 'Travel' },
    { id: 13, src: college, title: '', category: 'College' },
    { id: 14, src: fewa, title: '', category: 'Tour' },
    { id: 15, src: clz , title: '', category: 'College' },

  ];

  const bgCard = isDark
    ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500'
    : 'bg-white/50 border-slate-200 hover:border-blue-500';
  const bgOverlay = isDark ? 'bg-slate-950/90' : 'bg-white/90';

  // centralized class names for easier management
  const classes = {
    section: 'min-h-screen py-20 px-4 relative z-10',
    container: 'max-w-7xl mx-auto text-center',
    title: 'text-4xl md:text-5xl font-bold mb-12',
    titleGradient: 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent',
    intro: 'mt-2 mb-8 text-lg md:text-xl font-medium',
    hint: 'mt-2 mb-8 text-sm md:text-base font-medium',
    form: 'flex flex-col items-center gap-4 max-w-sm mx-auto p-6 rounded-xl border',
    inputBase: 'w-full px-4 py-3 border rounded-xl focus:outline-none',
    buttonBase: 'px-6 py-3 rounded-xl text-white font-semibold',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    card: `group relative overflow-hidden rounded-xl border transition-all duration-300 transform hover:scale-105`,
    img: 'w-full h-64 object-cover',
    overlayBase: `absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`,
    modalWrap: `fixed inset-0 flex items-center justify-center p-4 z-50`,
    modalCard: 'relative max-w-3xl w-full rounded-xl overflow-hidden',
  };

  return (
    <section id="gallery" ref={(el) => registerSection('gallery', el)} className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>
          <span className={classes.titleGradient}>My Photo Gallery</span>
        </h2>
        <p className={`${classes.intro} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
          Enter password to access the gallery
        </p>
        <p className={`${classes.hint} bg-gradient-to-r from-cyan-900 to-blue-300 bg-clip-text text-transparent`}>
          Hint: Just put my phone number
        </p>

        {!accessGranted && (
          <form onSubmit={handlePasswordSubmit} className={classes.form}>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password"
              className={`${classes.inputBase} ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-950'}`}
            />
            <button
              type="submit"
              className={`${classes.buttonBase} ${isDark ? 'bg-cyan-500 hover:bg-cyan-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              Unlock Gallery
            </button>
          </form>
        )}

        {accessGranted && (
          <div className={classes.grid}>
            {images.map((image) => (
              <button key={image.id} onClick={() => setSelectedImage(image)} className={`${classes.card} ${bgCard}`}>
                <img src={image.src} alt={image.title} className={classes.img} />
                <div className={`${classes.overlayBase} ${bgOverlay}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {image.title}
                  </h3>
                  <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm">{image.category}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedImage && accessGranted && (
        <div className={`${classes.modalWrap} ${bgOverlay}`} onClick={() => setSelectedImage(null)}>
          <div className={`${classes.modalCard} ${isDark ? 'bg-slate-900' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className={`absolute top-4 right-4 p-2 rounded-full ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'} z-10`}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-96 object-cover" />

            <div className="p-6">
              <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {selectedImage.title}
              </h3>
              <span className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
