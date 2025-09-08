import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' }
  ];

  return (
    <div className="language-switcher">
      <div className="language-button">
        <Globe size={20} />
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="language-select"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;