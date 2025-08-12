import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { articles } from '../data/content';
import { useAppContext, languageMeta } from '../contexts/AppContext';
import AnimateOnScroll from '../components/AnimateOnScroll';

const NewsPage: React.FC = () => {
  const { t, language } = useAppContext();
  const [filter, setFilter] = useState('All');
  
  const categories = useMemo(() => {
    const allCats = articles.map(a => a.category[language]);
    return [t('allCategories'), ...Array.from(new Set(allCats))];
  }, [language, t]);

  const filteredArticles = useMemo(() => {
    if (filter === t('allCategories') || filter === 'All') {
      return articles;
    }
    return articles.filter(article => article.category[language] === filter);
  }, [filter, language, t]);
  
  const locale = languageMeta[language].locale;

  return (
    <div className="py-20 sm:py-32 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t('newsTitle')}</h1>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll>
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                aria-label={t('filterByCategory')}
                className="appearance-none bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2.5 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <AnimateOnScroll key={article.id} delay={index * 100}>
              <div className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden hover:shadow-2xl dark:hover:border-gray-700 h-full">
                <img loading="lazy" src={`${article.imageUrl}?grayscale`} alt={article.title[language]} className="w-full h-56 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{article.category[language]}</span>
                    <span>{new Date(article.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-black dark:text-white">{article.title[language]}</h2>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-400 flex-grow">{article.excerpt[language]}</p>
                  <NavLink to={`/news/${article.id}`} className="mt-4 text-black dark:text-white font-semibold self-start group-hover:underline">{t('viewMore')} →</NavLink>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;