import React from 'react';
import { members } from '../data/content';
import { useAppContext } from '../contexts/AppContext';
import { TiktokIcon } from '../constants/icons';
import AnimateOnScroll from '../components/AnimateOnScroll';

const MembersPage: React.FC = () => {
    const { t, language } = useAppContext();
    const sortedMembers = [...members].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="py-20 sm:py-32 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t('membersTitle')}</h1>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {sortedMembers.map((member, index) => (
            <AnimateOnScroll key={member.id} delay={index * 50}>
              <div className="group text-center flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 hover:!scale-105 hover:-translate-y-1">
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                  <img
                    loading="lazy"
                    src={`${member.imageUrl}?grayscale`}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover transition-all duration-300 group-hover:shadow-xl"
                  />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-black dark:text-white">{member.name}</h2>
                <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{member.role[language]}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  {member.socials.tiktok && <a href={member.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><TiktokIcon className="w-5 h-5"/></a>}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersPage;