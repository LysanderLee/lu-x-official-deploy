
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { members, articles } from '../data/content';
import { TiktokIcon } from '../constants/icons';
import AnimateOnScroll from '../components/AnimateOnScroll';

const HomePage: React.FC = () => {
  const { t, language } = useAppContext();
  const featuredMembers = members.slice(0, 4);
  const latestArticle = articles.slice(0, 1);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              {t('welcomeTitle')}
            </h1>
        </div>
        <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
                {t('welcomeSubtitle')}
            </p>
        </div>
      </section>

      {/* Featured Members Section */}
      <section className="py-20 sm:py-28 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('meetMembers')}</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMembers.map((member, index) => (
              <AnimateOnScroll key={member.id} delay={index * 100}>
                <div className="group relative text-center flex flex-col items-center p-4 rounded-3xl transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:!scale-105">
                  <div className="relative w-40 h-40">
                    <img
                      loading="lazy"
                      src={`${member.imageUrl}?grayscale`}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover transition-all duration-300 group-hover:shadow-xl"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-black dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{member.role[language]}</p>
                   <div className="mt-4 flex justify-center space-x-4">
                    {member.socials.tiktok && <a href={member.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><TiktokIcon className="w-5 h-5"/></a>}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={400}>
            <div className="mt-16 text-center">
                <NavLink to="/members" className="inline-block px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform duration-200 hover:scale-105">
                    {t('viewMore')}
                </NavLink>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('latestNews')}</h2>
                </div>
            </AnimateOnScroll>
            <div className="max-w-2xl mx-auto">
                {latestArticle.map((article) => (
                    <AnimateOnScroll key={article.id}>
                         <div className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl hover:-translate-y-2 transition-all duration-300 overflow-hidden hover:shadow-2xl dark:hover:border-gray-700/80">
                            <div className="overflow-hidden">
                                <img loading="lazy" src={`${article.imageUrl}?grayscale`} alt={article.title[language]} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"/>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-sm text-gray-500 dark:text-gray-400">{article.category[language]}</span>
                                <h3 className="mt-2 text-2xl font-semibold text-black dark:text-white">{article.title[language]}</h3>
                                <p className="mt-4 text-base text-gray-600 dark:text-gray-400 flex-grow">{article.excerpt[language]}</p>
                                <NavLink to={`/news/${article.id}`} className="mt-6 text-black dark:text-white font-semibold self-start group-hover:underline">{t('viewMore')} →</NavLink>
                            </div>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
             <AnimateOnScroll delay={200}>
                <div className="mt-16 text-center">
                    <NavLink to="/news" className="inline-block px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform duration-200 hover:scale-105">
                        {t('newsTitle')}
                    </NavLink>
                </div>
          </AnimateOnScroll>
        </div>
      </section>

    </div>
  );
};

export default HomePage;