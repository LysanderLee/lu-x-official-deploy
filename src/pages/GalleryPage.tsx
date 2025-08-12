
import React from 'react';
import { galleryItems } from '../data/content';
import { useAppContext } from '../contexts/AppContext';
import AnimateOnScroll from '../components/AnimateOnScroll';

const GalleryPage: React.FC = () => {
  const { t, language } = useAppContext();

  return (
    <div className="py-20 sm:py-32 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t('galleryTitle')}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">{t('gallerySubtitle')}</p>
          </div>
        </AnimateOnScroll>
        
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
             <AnimateOnScroll key={item.id} delay={index * 50}>
              <div className="overflow-hidden rounded-2xl break-inside-avoid group relative">
                <img
                  loading="lazy"
                  src={`${item.imageUrl}?grayscale`}
                  alt={item.title[language]}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500 flex items-end">
                  <div className="p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white font-semibold text-lg drop-shadow-md">{item.title[language]}</h3>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;