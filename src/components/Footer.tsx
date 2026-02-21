import {NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* About Section */}
          <div className="footer-section about">
            <h3 className="footer-title">{t('footer.about.title')}</h3>
            <p>
              {t('footer.about.description')}
            </p>
            <div className="social-media">
              <a href="https://facebook.com" aria-label="Facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h3 className="footer-title">{t('footer.quickLinks.title')}</h3>
            <ul>
              <li><NavLink to="/" end>{t('nav.home')}</NavLink></li>
              <li><NavLink to="/about">{t('nav.about')}</NavLink></li>
              <li><NavLink to="/services">{t('nav.services')}</NavLink></li>
              <li><NavLink to="/events">{t('nav.events')}</NavLink></li>
              <li><NavLink to="/gallery">{t('nav.gallery')}</NavLink></li>
              <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact">
            <h3 className="footer-title">{t('footer.contactInfo.title')}</h3>
            <div className="contact-info">
              <p>
                <MapPin size={16} className="contact-icon" />
                {t('footer.contactInfo.address')}
              </p>
              <p>
                <Phone size={16} className="contact-icon" />
                {t('footer.contactInfo.phone')}
              </p>
              <p>
                <Mail size={16} className="contact-icon" />
                {t('footer.contactInfo.email')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t('footer.about.title')}. {t('footer.bottom.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;