import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Root() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, mirror: false });
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
