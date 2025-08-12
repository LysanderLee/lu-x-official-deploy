
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext, languageMeta, Language } from '../contexts/AppContext';
import { LogoIcon, TiktokIcon, WhatsAppIcon, MenuIcon, XIcon, SunIcon, MoonIcon, GlobeIcon } from '../constants/icons';

const Header: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage, t } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Decouple state for desktop and mobile language pickers for reliability
  const [isDesktopLangPickerOpen, setIsDesktopLangPickerOpen] = useState(false);
  const [isMobileLangPickerOpen, setIsMobileLangPickerOpen] = useState(false);

  const desktopLangPickerRef = useRef<HTMLDivElement>(null);
  const mobileLangPickerRef = useRef<HTMLDivElement>(null);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-black dark:text-white'
        : 'text-gray-500 hover:text-black dark:hover:text-white'
    }`;
  
  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block text-center text-3xl font-semibold py-3 transition-colors duration-300 ${
      isActive
        ? 'text-black dark:text-white'
        : 'text-gray-500 hover:text-black dark:hover:text-white'
    }`;

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileLangPickerOpen(false); // Also close lang picker when menu closes
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (isDesktopLangPickerOpen && !desktopLangPickerRef.current?.contains(target)) {
        setIsDesktopLangPickerOpen(false);
      }
      if (isMobileLangPickerOpen && !mobileLangPickerRef.current?.contains(target)) {
        setIsMobileLangPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDesktopLangPickerOpen, isMobileLangPickerOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/", text: t('home') },
    { to: "/about", text: t('about') },
    { to: "/members", text: t('members') },
    { to: "/news", text: t('news') },
    { to: "/contact", text: t('contact') },
    { to: "/faq", text: t('faq') },
  ];

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsDesktopLangPickerOpen(false);
    setIsMobileLangPickerOpen(false);
  };
  
  const LanguagePickerDropdown = ({ onSelect }: { onSelect: (lang: Language) => void }) => (
    <ul className="space-y-1">
      {(Object.keys(languageMeta) as Language[]).map(langKey => (
         <li key={langKey}>
           <button onClick={() => onSelect(langKey)} className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${language === langKey ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
              {languageMeta[langKey].nativeName}
           </button>
         </li>
      ))}
    </ul>
  );


  return (
    <>
      <header className={`sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-black/95 shadow-lg border-b border-gray-200/5 dark:border-gray-800/5' 
          : 'bg-white/80 dark:bg-black/80 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <NavLink to="/" className="flex-shrink-0 text-black dark:text-white" aria-label="Back to homepage">
                <LogoIcon className="h-7 w-auto"/>
              </NavLink>
            </div>
            <nav className="hidden md:block" aria-label="Main navigation">
              <div className="flex items-baseline space-x-2">
                {navLinks.map(link => (
                    <NavLink key={link.to} to={link.to} className={navLinkClass}>
                        {link.text}
                    </NavLink>
                ))}
              </div>
            </nav>
            <div className="hidden md:flex items-center space-x-1">
               <div className="relative" ref={desktopLangPickerRef}>
                  <button onClick={() => setIsDesktopLangPickerOpen(!isDesktopLangPickerOpen)} aria-label="Toggle Language" aria-haspopup="true" aria-expanded={isDesktopLangPickerOpen} className="p-2 rounded-full text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <GlobeIcon className="h-5 w-5"/>
                  </button>
                  {isDesktopLangPickerOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 p-2 z-10 animate-fade-in" style={{animationDuration: '150ms'}}>
                      <LanguagePickerDropdown onSelect={handleLanguageSelect} />
                    </div>
                  )}
               </div>
               <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
               </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => isMenuOpen ? closeMobileMenu() : setIsMenuOpen(true)} aria-controls="mobile-menu" aria-expanded={isMenuOpen} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-black dark:hover:text-white focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" className={`fixed inset-0 z-40 bg-white dark:bg-black md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col justify-center items-center h-full pt-20 pb-10">
            <nav className="flex flex-col space-y-6" aria-label="Main mobile navigation">
                 {navLinks.map((link, index) => (
                    <div key={link.to} className="transition-all duration-300" style={{ transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isMenuOpen ? 1 : 0, transitionDelay: `${index * 50}ms` }}>
                      <NavLink to={link.to} className={mobileNavLinkClass} onClick={closeMobileMenu}>
                          {link.text}
                      </NavLink>
                    </div>
                ))}
            </nav>
            {/* Consolidated mobile controls for better layout and reliability */}
            <div className="mt-auto flex items-center justify-center space-x-6">
              <a href="https://whatsapp.com/channel/0029VbAzFh2B4hdRgypxdL2l" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"><WhatsAppIcon className="h-6 w-6" /></a>
              <a href="https://www.tiktok.com/@luxoffc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"><TiktokIcon className="h-6 w-6" /></a>
              
              <div className="relative" ref={mobileLangPickerRef}>
                 <button onClick={() => setIsMobileLangPickerOpen(!isMobileLangPickerOpen)} aria-label="Toggle Language" aria-haspopup="true" aria-expanded={isMobileLangPickerOpen} className="p-2 rounded-full text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                     <GlobeIcon className="h-6 w-6"/>
                 </button>
                  {isMobileLangPickerOpen && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 p-2 z-10 animate-fade-in" style={{animationDuration: '150ms'}}>
                      <LanguagePickerDropdown onSelect={handleLanguageSelect} />
                    </div>
                  )}
             </div>

             <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
             </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
