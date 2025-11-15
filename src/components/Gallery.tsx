import { useState } from 'react';
import { X } from 'lucide-react';
import nagarkot from '../assets/hills.jpg'
import friendphoto from '../assets/friends.jpg'
import flowerphoto from '../assets/flower.jpg'
import petphoto from '../assets/pet.jpg'
import sunrisephoto from '../assets/sunrise.jpg'
import sunsetphoto from '../assets/sunset.jpg'
import shopphoto from '../assets/shop.jpg'
import mentorsphoto from '../assets/mentors1.jpg'
import mentorsphoto1 from '../assets/mentors2.jpg'
import familyphoto from '../assets/family.jpg'
import hillphoto1 from '../assets/hill1.jpg'
import myphoto from '../assets/me.jpg'
import myphoto1 from '../assets/me1.jpg'
import myphoto2 from '../assets/me2.jpg'
import momdadphoto from '../assets/momdad.jpg'
import dadphoto from '../assets/dad.jpg'
import bolbamphoto from '../assets/bolbam.jpg'
import chandragiri from '../assets/chandragiri.jpg'


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
    { id: 1, src: myphoto, title: 'Myself', category: 'Photo' },
    { id: 2, src: sunrisephoto, title: 'Sunrise', category: 'Nature' },
    { id: 3, src: sunsetphoto, title: 'Sunset', category: 'Nature' },
    { id: 4, src: hillphoto1, title: 'Hills', category: 'Nature' },
    { id: 5, src: mentorsphoto , title: 'Mentors Academy', category: 'Learning' },
    { id: 6, src: friendphoto, title: 'Friends', category: 'Friends' },
    { id: 7, src: flowerphoto, title: 'Flower', category: 'Nature' },
    { id: 8, src: petphoto, title: 'An old pet', category: 'Pet' },
    { id: 9, src: shopphoto, title: 'Shop', category: 'Shop' },
    { id: 10, src: nagarkot, title: 'Nagarkot', category: 'Travelling' },
    { id: 11, src: mentorsphoto1, title: 'Mentors Academy', category: 'Learning' },
    { id: 12, src: myphoto1, title: 'Myself', category: 'Photo' },
    { id: 13, src: myphoto2, title: 'Myself', category: 'Photo' },
    { id: 14, src: momdadphoto, title: 'Me with Mom & Dad', category: 'Travelling' },
    { id: 15, src: dadphoto, title: 'Dad', category: 'Family' },
    { id: 16, src: bolbamphoto, title: 'Bolbam 2082', category: 'Travelling' },
    { id: 17, src: chandragiri, title: 'Chandragiri', category: 'Travelling' },
    { id: 18, src: familyphoto, title: 'Family', category: 'Family' },

  ];

  const bgCard = isDark
    ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500'
    : 'bg-white/50 border-slate-200 hover:border-blue-500';
  const bgOverlay = isDark ? 'bg-slate-950/90' : 'bg-white/90';

  return (
    <section
      id="gallery"
      ref={(el) => registerSection('gallery', el)}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Photo Gallery
          </span>
        </h2>
        <p className="mt-2 mb-8 text-lg md:text-xl font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Enter password to access the gallery
        </p>

        {!accessGranted && (
          <form
            onSubmit={handlePasswordSubmit}
            className="flex flex-col items-center gap-4 max-w-sm mx-auto p-6 rounded-xl border"
          >
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none ${
                isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-950'
              }`}
            />
            <button
              type="submit"
              className={`px-6 py-3 rounded-xl text-white font-semibold ${
                isDark ? 'bg-cyan-500 hover:bg-cyan-600' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              Unlock Gallery
            </button>
          </form>
        )}

        {accessGranted && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`group relative overflow-hidden rounded-xl border transition-all duration-300 transform hover:scale-105 ${bgCard}`}
              >
                <img src={image.src} alt={image.title} className="w-full h-64 object-cover" />
                <div
                  className={`absolute inset-0 ${bgOverlay} opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center`}
                >
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
        <div
          className={`fixed inset-0 ${bgOverlay} flex items-center justify-center p-4 z-50`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={`relative max-w-3xl w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
            onClick={(e) => e.stopPropagation()}
          >
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
