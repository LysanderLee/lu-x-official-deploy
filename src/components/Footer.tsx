import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiktokIcon, WhatsAppIcon, MailIcon } from '../constants/icons';
import { useAppContext } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t } = useAppContext();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { to: "/about", text: t('about') },
    { to: "/members", text: t('members') },
    { to: "/news", text: t('news') },
    { to: "/contact", text: t('contact') },
    { to: "/faq", text: t('faq') },
  ];

  // Custom LogoIcon untuk footer dengan ukuran lebih besar
  const FooterLogoIcon = () => (
    <img 
      src="/img/logo.png" 
      alt="LU:X Official Logo" 
      className="aspect-square object-cover rounded-lg"
      style={{
        width: '125px',
        height: '125px',
        aspectRatio: '1/1'
      }}
    />
  );

  return (
    <footer className="bg-gray-100/50 dark:bg-gray-900/50 border-t border-gray-200/80 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <FooterLogoIcon />
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mt-4">{t('heroSubtitle')}</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">{t('luxOfficial')}</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.map(link => (
                  <li key={link.to}>
                    <NavLink to={link.to} className="text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
               <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">{t('followUs')}</h3>
              <div className="mt-4 flex space-x-4">
                  <a href="https://whatsapp.com/channel/0029VbAzFh2B4hdRgypxdL2l" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <span className="sr-only">WhatsApp</span>
                    <WhatsAppIcon className="h-6 w-6" />
                  </a>
                  <a href="https://www.tiktok.com/@luxoffc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <span className="sr-only">TikTok</span>
                    <TiktokIcon className="h-6 w-6" />
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200/80 dark:border-gray-800/80 pt-8 text-center">
           <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {t('luxOfficial')}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
