import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Stethoscope, PhoneCall, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import EventCard from '../components/EventCard';
import '../styles/Home.css';

const Home = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoized slides to update on language change
  const slides = useMemo(() => [
    {
      image: "https://media.istockphoto.com/id/503160722/photo/farmer-spreads-fertilizers-in-the-field-wheat.jpg?s=612x612&w=0&k=20&c=H616JmwTXkV8LVsiriMyqx2M9W_LUHbMwKiHEsehz-E=",
      title: t('home.slider1Title'),
      subtitle: t('home.slider1Subtitle')
    },
    {
      image: "https://media.istockphoto.com/id/1157249891/photo/shantiniketan-bolpur-india-annual-fair-in-evening.jpg?s=612x612&w=0&k=20&c=dHCev7ph_doyr0hoAEBNGDyGsqRD9eLpcsff1p7i3J8=",
      title: t('home.slider2Title'),
      subtitle: t('home.slider2Subtitle')
    },
    {
      image: "https://media.istockphoto.com/id/1060740880/photo/aerial-view-of-poor-indian-town-varsana-barsana-high-resolution-panorama-for-large-format.jpg?s=612x612&w=0&k=20&c=eFZ2CF0oUgcF23IVcsDCw9QGr6q2a6d22_4nTSJKn4c=",
      title: t('home.slider3Title'),
      subtitle: t('home.slider3Subtitle')
    }
  ], [t]);

  // Member images are constant, so we map them to the translated data
  const memberImages = [
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/men/41.jpg',
    'https://randomuser.me/api/portraits/women/65.jpg',
    'https://randomuser.me/api/portraits/women/72.jpg',
    'https://randomuser.me/api/portraits/women/50.jpg',
    'https://randomuser.me/api/portraits/women/48.jpg',
    'https://randomuser.me/api/portraits/women/60.jpg',
    'https://randomuser.me/api/portraits/men/55.jpg',
    'https://randomuser.me/api/portraits/men/36.jpg',
    'https://randomuser.me/api/portraits/men/28.jpg'
  ];

  // This fetches the translated array from your config.ts
  const translatedMembers = t('home.membersList', { returnObjects: true }) as Array<{
    name: string;
    position: string;
    category: string;
  }>;

  const recentEvents = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
      title: "Blood Donation Camp",
      date: "May 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Village Community Hall",
      description: "Join us for the annual blood donation camp organized in association with District Hospital."
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
      title: "Farmers Training Program",
      date: "June 2, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Agricultural Extension Center",
      description: "Learn about modern farming techniques and government schemes for farmers."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="important-notice-3d">
        <div className="notice-scroll">
          <span className="notice-text">{t('home.notice')}</span>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>{t('home.welcomeTitle')}</h2>
              <p>{t('home.welcomeText1')}</p>
              <p>{t('home.welcomeText2')}</p>
              <Link to="/about" className="btn-primary">{t('home.learnMore')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Panchayat Members */}
      <section className="members-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('home.membersTitle')}</h2>
            <p>{t('home.membersSubtitle')}</p>
          </div>
          
          <div className="members-table">
            <table>
              <thead>
                <tr>
                  <th>{t('home.memberTable.sr')}</th>
                  <th>{t('home.memberTable.photo')}</th>
                  <th>{t('home.memberTable.name')}</th>
                  <th>{t('home.memberTable.role')}</th>
                  <th>{t('home.memberTable.category')}</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(translatedMembers) && translatedMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="member-image-container">
                        <img 
                          src={memberImages[index]} 
                          alt={member.name} 
                          className="member-image"
                          style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
                        />
                      </div>
                    </td>
                    <td>{member.name}</td>
                    <td>{member.position}</td>
                    <td>{member.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="emergency-services">
        <div className="container">
          <div className="section-header">
            <h2>{t('home.emergencyTitle')}</h2>
            <p>{t('home.emergencySubtitle')}</p>
          </div>
          
          <div className="emergency-grid">
            <div className="emergency-card">
              <div className="emergency-icon"><Ambulance size={32} /></div>
              <h3>{t('home.ambulance')}</h3>
              <p>Contact: 108</p>
              <p>Alternate: +91 98765 43210</p>
            </div>

            <div className="emergency-card">
              <div className="emergency-icon"><Stethoscope size={32} /></div>
              <h3>{t('home.medical')}</h3>
              <p>Dr. Patil: +91 98765 12345</p>
              <p>PHC: 02135-123456</p>
            </div>

            <div className="emergency-card">
              <div className="emergency-icon"><PhoneCall size={32} /></div>
              <h3>{t('home.police')}</h3>
              <p>Emergency: 100</p>
              <p>Station: 02135-234567</p>
            </div>

            <div className="emergency-card">
              <div className="emergency-icon"><Phone size={32} /></div>
              <h3>{t('home.fire')}</h3>
              <p>Fire: 101</p>
              <p>Control: 02135-345678</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('home.eventsTitle')}</h2>
            <p>{t('home.eventsSubtitle')}</p>
          </div>
          
          <div className="events-container">
            {recentEvents.map(event => (
              <EventCard 
                key={event.id}
                image={event.image}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
              />
            ))}
          </div>
          
          <div className="events-btn-container">
            <Link to="/events" className="btn-secondary">{t('home.viewAllEvents')}</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.ctaTitle')}</h2>
            <p>{t('home.ctaText')}</p>
            <Link to="/contact" className="btn-primary">{t('home.contactBtn')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;