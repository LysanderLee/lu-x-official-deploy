import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { articles } from '../data/content';
import { useAppContext, languageMeta } from '../contexts/AppContext';
import AnimateOnScroll from '../components/AnimateOnScroll';

const NewsDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { t, language } = useAppContext();
  
  const article = articles.find(a => a.id.toString() === articleId);
  const locale = languageMeta[language].locale;

  if (!article) {
    return (
      <div className="py-20 sm:py-32 text-center animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Artikel tidak ditemukan</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Maaf, artikel yang Anda cari tidak ada.</p>
        <div className="mt-10">
            <NavLink to="/news" className="inline-block px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform duration-200 hover:scale-105">
                {t('backToNews')}
            </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 sm:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
            <div className="mb-8">
                <NavLink to="/news" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white font-semibold transition-colors">
                    &larr; {t('backToNews')}
                </NavLink>
            </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
            <article>
                <header className="mb-12 text-center">
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
                        {article.category[language]} &bull; {new Date(article.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{article.title[language]}</h1>
                </header>

                <div className="mb-12 overflow-hidden rounded-3xl shadow-xl">
                    <img
                        src={`${article.imageUrl}?grayscale`}
                        alt={article.title[language]}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed text-justify">
                    {article.content[language].split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </article>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={200}>
            <div className="mt-20 text-center border-t border-gray-200 dark:border-gray-800 pt-12">
                 <NavLink to="/news" className="inline-block px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform duration-200 hover:scale-105">
                    {t('backToNews')}
                </NavLink>
            </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default NewsDetailPage;