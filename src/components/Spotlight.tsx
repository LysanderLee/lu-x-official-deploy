
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

const Spotlight: React.FC = () => {
  const { theme } = useAppContext();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
        setIsDesktop(window.innerWidth > 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);
  
  useEffect(() => {
    if (isDesktop && theme === 'dark') {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isDesktop, theme]);

  if (theme !== 'dark' || !isDesktop) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
      }}
    ></div>
  );
};

export default Spotlight;
