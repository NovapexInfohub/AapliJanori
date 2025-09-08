import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/HeroSection.css';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage: string;
  scrollToRef?: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage, scrollToRef }) => {
  const [offset, setOffset] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollDown = () => {
    if (scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: `${50 + offset * 0.1}%` 
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title || t('welcome.title')}</h1>
        <h2 className="hero-subtitle">{subtitle || t('welcome.subtitle')}</h2>
        {scrollToRef && (
          <button className="scroll-down-btn" onClick={scrollDown}>
            <ArrowDown size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;