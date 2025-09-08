import { Link, NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* About Section */}
          <div className="footer-section about">
            <h3 className="footer-title">Janori Gram Panchayat</h3>
            <p>
              Serving the residents of Janori village with dedication and transparency,
              working together for rural development and community welfare.
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
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/events">Events</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>
                <MapPin size={16} className="contact-icon" />
                At Post Janori, Tq. Shegaon, Dist. Buldhana, Pin 444203
              </p>
              <p>
                <Phone size={16} className="contact-icon" />
                +91 98765 43210
              </p>
              <p>
                <Mail size={16} className="contact-icon" />
                grampanchayat.janori@gov.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Janori Gram Panchayat. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;