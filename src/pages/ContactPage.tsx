import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { TiktokIcon, WhatsAppIcon } from '../constants/icons';
import AnimateOnScroll from '../components/AnimateOnScroll';

const ContactPage: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="py-20 sm:py-32 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t('contactTitle')}</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">{t('contactSubtitle')}</p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="mt-16">
              <h2 className="text-lg font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">{t('followUs')}</h2>
              <div className="mt-8 flex justify-center items-center space-x-8">
                <a
                  href="https://whatsapp.com/channel/0029VbAzFh2B4hdRgypxdL2l"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <WhatsAppIcon className="h-8 w-8" />
                </a>
                <a
                  href="https://www.tiktok.com/@luxoffc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <TiktokIcon className="h-8 w-8" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
