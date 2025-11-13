import { useState } from 'react';
import { X } from 'lucide-react';
import hillphoto from '../assets/hills.jpg'
import friendphoto from '../assets/friends.jpg'

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

  // Replace these URLs with your personal photos
  const images: GalleryImage[] = [
    { id: 1, src: 'https://your-photo-link-1.jpg', title: 'My Portrait', category: 'Portrait' },
    { id: 2, src: 'https://your-photo-link-2.jpg', title: 'At the Beach', category: 'Travel' },
    { id: 3, src: 'https://your-photo-link-3.jpg', title: 'City Lights', category: 'Urban' },
    { id: 4, src: hillphoto, title: 'hills', category: 'Nature' },
    { id: 5, src: 'https://your-photo-link-5.jpg', title: 'Sunset', category: 'Nature' },
    { id: 6, src: friendphoto, title: 'Friends', category: 'People' },
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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Photo Gallery
          </span>
        </h2>

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
      </div>

      {selectedImage && (
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
