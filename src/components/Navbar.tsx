import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo.dark.png';

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => (location.pathname === path ? 'active' : '');

  const panchayatText = location.pathname === '/' ? 'माझ गाव माझा अभिमान' : t('nav.panchayatText', 'Aapli janori');

  // Select logo based on current theme
  const logoSrc = theme === 'light' ? logoLight : logoDark;

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logoSrc} alt="Logo" className="logo-img" />
            <div className="logo-text-wrapper">
              <span className="village-name">{t('nav.brandTitle')}</span>
              <span className="panchayat-text">{panchayatText}</span>
            </div>
          </Link>

          <div className="nav-controls-mobile">
             <button className="theme-toggle-mobile" onClick={toggleTheme}>
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
             </button>
             <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
             </div>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {[
              { path: '/', label: 'nav.home', default: 'Home' },
              { path: '/about', label: 'nav.about', default: 'About' },
              { path: '/services', label: 'nav.services', default: 'Services' },
              { path: '/events', label: 'nav.events', default: 'Events' },
              { path: '/gallery', label: 'nav.gallery', default: 'Gallery' },
              { path: '/contact', label: 'nav.contact', default: 'Contact' },
            ].map((link) => (
              <li key={link.path} className={`nav-item ${isActive(link.path)}`}>
                <Link to={link.path} className="nav-link" onClick={closeMenu}>
                  {t(link.label, link.default)}
                </Link>
              </li>
            ))}

            <li className="nav-actions">
              <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Theme">
                <div className={`toggle-slider ${theme}`}>
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                </div>
              </button>
              <div className="lang-wrapper">
                <LanguageSwitcher />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* Background overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;