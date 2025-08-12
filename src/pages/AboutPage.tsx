import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import AnimateOnScroll from '../components/AnimateOnScroll';

const AboutPage: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="py-20 sm:py-32 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {t('aboutTitle')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
              {t('aboutP1')}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-24 space-y-20">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight">{t('visionTitle')}</h2>
                <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('visionText')}
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://picsum.photos/seed/vision/500/350?grayscale"
                  alt="Vision and Mission"
                  className="rounded-3xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight">{t('nonAgencySystemTitle')}</h2>
                <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('nonAgencySystemText')}
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://picsum.photos/seed/system/500/350?grayscale"
                  alt="Non-agency System"
                  className="rounded-3xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;