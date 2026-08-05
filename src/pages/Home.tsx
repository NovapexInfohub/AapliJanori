import { useEffect, useState, useMemo } from 'react'; 
import { Link } from 'react-router-dom';
import { Ambulance, Stethoscope, PhoneCall, Phone, Landmark as TempleIcon, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import EventCard from '../components/EventCard';
import '../styles/Home.css';

// Import temple images
import templeImg1 from '../assets/temple img/img1.jpeg';
import templeImg2 from '../assets/temple img/img2.jpeg';
import templeImg3 from '../assets/temple img/img3.jpeg';
import templeImg4 from '../assets/temple img/img4.jpeg';
import templeImg5 from '../assets/temple img/img5.jpeg';
import templeImg6 from '../assets/temple img/img6.jpeg';
import templeImg7 from '../assets/temple img/img7.jpeg';
import templeImg8 from '../assets/temple img/img8.jpeg';
import templeImg9 from '../assets/temple img/img9.jpeg';

// Declare global Elfsight namespace
declare global {
  interface Window {
    elfsight?: {
      init?: () => void;
    };
  }
}

type TalukaInfo = {
  id: string;
  name: string;
  distanceKm: number;
  travelTime: string;
  description: string;
};

type DistrictInfo = {
  id: string;
  name: string;
  talukas: TalukaInfo[];
};

const districts: DistrictInfo[] = [
  {
    id: 'buldhana',
    name: 'Buldhana',
    talukas: [
      {
        id: 'shegaon',
        name: 'Shegaon',
        distanceKm: 22,
        travelTime: '30–40 minutes by road',
        description:
          'Shegaon is the nearest taluka place for Janori with regular ST buses and shared autos available throughout the day.',
      },
      {
        id: 'khamgaon',
        name: 'Khamgaon',
        distanceKm: 45,
        travelTime: '1–1.5 hours by road',
        description:
          'Khamgaon is a major commercial centre. Buses from Janori generally go via Shegaon, with good road connectivity.',
      },
      {
        id: 'malkapur',
        name: 'Malkapur',
        distanceKm: 70,
        travelTime: '1.5–2 hours by road',
        description:
          'Malkapur connects to the Mumbai–Nagpur highway. Travel from Janori usually involves a change of bus at Shegaon or Khamgaon.',
      },
    ],
  },
];

const Home = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>(
    districts[0]?.id ?? ''
  );
  const [selectedTalukaId, setSelectedTalukaId] = useState<string>('');

  const selectedDistrict = districts.find((d) => d.id === selectedDistrictId);
  const talukasForSelectedDistrict = selectedDistrict?.talukas ?? [];
  const selectedTaluka = talukasForSelectedDistrict.find(
    (taluka) => taluka.id === selectedTalukaId
  );

  // Temple images array
  const templeImages = [
    templeImg1, templeImg2, templeImg3, templeImg4, templeImg5,
    templeImg6, templeImg7, templeImg8, templeImg9
  ];

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

  const memberImages = Array(12).fill('');

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

  // Load Elfsight script dynamically
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectedImage && (e.target as HTMLElement).classList.contains('modal-overlay')) {
        setSelectedImage(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [selectedImage]);

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

      {/* Travel Time – District & Taluka Selector */}
      <section className="travel-time-section">
        <div className="container">
          <div className="section-header">
            <h2>Travel time from Janori</h2>
            <p>
              Select a district and taluka to view distance and approximate
              travel time from Janori.
            </p>
          </div>

          <div className="travel-time-layout">
            <div className="travel-time-filters">
              <div className="form-group">
                <label htmlFor="districtSelect">District</label>
                <select
                  id="districtSelect"
                  value={selectedDistrictId}
                  onChange={(e) => {
                    setSelectedDistrictId(e.target.value);
                    setSelectedTalukaId('');
                  }}
                >
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="talukaSelect">Taluka</label>
                <select
                  id="talukaSelect"
                  value={selectedTalukaId}
                  onChange={(e) => setSelectedTalukaId(e.target.value)}
                >
                  <option value="">Select taluka</option>
                  {talukasForSelectedDistrict.map((taluka) => (
                    <option key={taluka.id} value={taluka.id}>
                      {taluka.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedTaluka && (
              <div className="travel-time-card">
                <h3>{selectedTaluka.name}</h3>
                <p className="travel-time-meta">
                  <span>District:</span> {selectedDistrict?.name}
                </p>
                <p className="travel-time-meta">
                  <span>Distance:</span> {selectedTaluka.distanceKm} km (approx.)
                </p>
                <p className="travel-time-meta">
                  <span>Travel time:</span> {selectedTaluka.travelTime}
                </p>
                <p className="travel-time-description">
                  {selectedTaluka.description}
                </p>
              </div>
            )}
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
                        {memberImages[index] ? (
                          <img 
                            src={memberImages[index]} 
                            alt={member.name} 
                            className="member-image"
                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
                          />
                        ) : (
                          <div className="member-avatar-placeholder">
                            <User size={42} />
                          </div>
                        )}
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

      {/* Temple Section - New Addition */}
      <section className="temple-section">
        <div className="container">
          <div className="section-header">
            <div className="temple-icon-wrapper">
              <TempleIcon size={40} className="temple-icon" />
            </div>
            <h2>{t('home.templeTitle') || 'Our Gram Devata Temple'}</h2>
            <p>{t('home.templeSubtitle') || 'Glimpses of our sacred temple and festivals'}</p>
          </div>

          <div className="temple-gallery">
            {templeImages.map((image, index) => (
              <div 
                key={index} 
                className="temple-gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Temple ${index + 1}`} 
                  className="temple-gallery-image"
                  loading="lazy"
                />
                <div className="temple-gallery-overlay">
                  <span className="view-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>

          <div className="temple-description">
            <p>{t('home.templeDescription') || 'The Gram Devata temple is the heart of our village, where centuries of tradition and faith come together. Daily prayers, weekly bhajans, and annual festivals bring the community together in celebration and devotion.'}</p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Temple enlarged view" className="modal-image" />
          </div>
        </div>
      )}

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

      {/* Instagram Feed Section */}
      <section className="instagram-feed-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('home.instagramTitle') || 'Follow Us on Instagram'}</h2>
            <p>{t('home.instagramSubtitle') || '@janori_grampanchayat'}</p>
          </div>
          
              {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
          <div 
            className="elfsight-app-1c58a8fd-5099-4e6d-ab24-ce735ec29785" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Home;