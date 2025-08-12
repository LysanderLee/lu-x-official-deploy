
import React, { useState } from 'react';
import { faqs } from '../data/content';
import { useAppContext } from '../contexts/AppContext';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { PlusIcon, MinusIcon } from '../constants/icons';

interface FAQItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onClick }) => {
  const { language } = useAppContext();
  
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-black dark:text-white">{faq.question[language]}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? <MinusIcon className="h-6 w-6 text-gray-500" /> : <PlusIcon className="h-6 w-6 text-gray-500" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="pb-6 pr-12">
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer[language]}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const { t } = useAppContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 sm:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t('faqTitle')}</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">{t('faqSubtitle')}</p>
          </div>
        </AnimateOnScroll>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={faq.id} delay={index * 100}>
                <FAQItem 
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;