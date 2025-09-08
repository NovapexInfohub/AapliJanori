import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError('');

    const validUsername = 'admin';
    const validPassword = '12345';

    if (adminUsername === validUsername && adminPassword === validPassword) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('isAdmin', 'true');
      }
      setShowLogin(false);
      setAdminUsername('');
      setAdminPassword('');
      setLoginError('');
      window.location.reload();
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('isAdmin');
      window.location.reload();
    }
  };

  const isAdmin =
    typeof window !== 'undefined' && window.localStorage.getItem('isAdmin') === 'true';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
       <div className="logo">
        <img 
  src="Aaplijanori_20250126_141653_0000.svg" 
  alt="जानोरी Logo" 
  style={{ height: "80px", width: "120px", objectFit: "contain" }} 
/>
</div>

      <span className="text-xl font-bold tracking-wide text-white">
    Aapli Janori
  </span>

          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className={`nav-item ${isActive('/')}`}>
              <Link to="/" className="nav-link" onClick={closeMenu}>
                {t('nav.home', 'Home')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/about')}`}>
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                {t('nav.about', 'About')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/services')}`}>
              <Link to="/services" className="nav-link" onClick={closeMenu}>
                {t('nav.services', 'Services')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/events')}`}>
              <Link to="/events" className="nav-link" onClick={closeMenu}>
                {t('nav.events', 'Events')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/gallery')}`}>
              <Link to="/gallery" className="nav-link" onClick={closeMenu}>
                {t('nav.gallery', 'Gallery')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/contact')}`}>
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
                {t('nav.contact', 'Contact')}
              </Link>
            </li>
            {!isAdmin && (
              <li className="nav-item">
                <button
                  className={`nav-link admin-btn${isScrolled ? ' scrolled' : ''}`}
                  onClick={() => setShowLogin(true)}
                >
                  <User size={18} className="admin-btn-icon" />
                  {t('nav.adminLogin', 'Admin Login')}
                </button>
              </li>
            )}
            {isAdmin && (
              <li className="nav-item">
                <button
                  className={`nav-link${isScrolled ? ' scrolled' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    marginLeft: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    transition: 'color 0.4s',
                  }}
                  onClick={handleLogout}
                >
                  {t('nav.logout', 'Logout')}
                </button>
              </li>
            )}
            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>

          {showLogin && (
            <div className="admin-login-modal-bg">
              <form className="admin-login-card" onSubmit={handleLogin}>
                <h2 className="admin-login-title">Login</h2>
                <label className="admin-login-label">
                  Username
                  <input
                    type="text"
                    className="admin-login-input"
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                  />
                </label>
                <label className="admin-login-label">
                  Password
                  <input
                    type="password"
                    className="admin-login-input"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                  />
                </label>
                <div className="admin-login-options">
                  <label>
                    <input type="checkbox" style={{ marginRight: 4 }} />
                    <span style={{ color: '#2196f3' }}>Remember me</span>
                  </label>
                </div>
                {loginError && (
                  <div style={{ color: '#e53935', textAlign: 'center' }}>{loginError}</div>
                )}
                <button type="submit" className="admin-login-btn">
                  Login
                </button>
                <button
                  type="button"
                  className="admin-login-cancel"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
