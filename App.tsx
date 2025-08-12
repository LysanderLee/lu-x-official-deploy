
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './src/contexts/AppContext';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
import MembersPage from './src/pages/MembersPage';
import NewsPage from './src/pages/NewsPage';
import NewsDetailPage from './src/pages/NewsDetailPage';
import ContactPage from './src/pages/ContactPage';
import FAQPage from './src/pages/FAQPage';
import GalleryPage from './src/pages/GalleryPage';
import ScrollToTop from './src/components/ScrollToTop';
import Spotlight from './src/components/Spotlight';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Spotlight />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
          <a href="#main-content" className="absolute z-[9999] -top-full left-1/2 -translate-x-1/2 p-3 bg-black dark:bg-white text-white dark:text-black focus:top-4 transition-all duration-300 rounded-lg font-semibold">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-grow relative z-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:articleId" element={<NewsDetailPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
