import React, { createContext, useState, useContext, useEffect, useMemo, useCallback } from 'react';
import { textContent } from '../data/content';
import type { Strings } from '../types';

export type Theme = 'light' | 'dark';
export type Language = 'id' | 'en' | 'ko' | 'ja';

export const languageMeta: Record<Language, { name: string; nativeName: string; locale: string; }> = {
  id: { name: 'Indonesian', nativeName: 'Bahasa Indonesia', locale: 'id-ID' },
  en: { name: 'English', nativeName: 'English', locale: 'en-US' },
  ja: { name: 'Japanese', nativeName: '日本語', locale: 'ja-JP' },
  ko: { name: 'Korean', nativeName: '한국어', locale: 'ko-KR' },
};

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Strings) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme && ['light', 'dark'].includes(storedTheme)) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && languageMeta[storedLang]) {
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = languageMeta[language]?.locale || 'id-ID';
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const setLanguageCallback = useCallback((lang: Language) => {
    if (languageMeta[lang]) {
      setLanguage(lang);
    }
  }, []);

  const t = useCallback((key: keyof Strings): string => {
    const translation = textContent[key];
    return translation?.[language] || translation?.['en'] || String(key);
  }, [language]);

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
    language,
    setLanguage: setLanguageCallback,
    t,
  }), [theme, toggleTheme, language, setLanguageCallback, t]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
