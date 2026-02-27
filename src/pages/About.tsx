import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import { Users, Award, Map } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      year: '2023',
      title: t('about.achievements.items.2023.title'),
      description: t('about.achievements.items.2023.description'),
    },
    {
      year: '2022',
      title: t('about.achievements.items.2022.title'),
      description: t('about.achievements.items.2022.description'),
    },
    {
      year: '2021',
      title: t('about.achievements.items.2021.title'),
      description: t('about.achievements.items.2021.description'),
    },
    {
      year: '2020',
      title: t('about.achievements.items.2020.title'),
      description: t('about.achievements.items.2020.description'),
    },
    {
      year: '2018',
      title: t('about.achievements.items.2018.title'),
      description: t('about.achievements.items.2018.description'),
    },
  ];

  return (
    <div className="about-page">
      <HeroSection 
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="village-info-section">
        <div className="container">
          <div className="village-info-content">
            <div className="village-image">
              <img 
                src="https://i.ytimg.com/vi/s2OJzfFIQ10/maxresdefault.jpg" 
                alt={t('about.history.title')} 
              />
              <br></br>
              <img 
               src="https://www.memeraki.com/cdn/shop/articles/Screenshot_2023-02-01_at_3.27.33_AM_1200x1200.png?v=1675202595"
              alt={t('about.history.title')} 
              />
            </div>
            <div className="village-text">
              <h2>{t('about.history.title')}</h2>
              <p>{t('about.history.p1')}</p>
              <p>{t('about.history.p2')}</p>
              <p>{t('about.history.p3')}</p>
              <p>{t('about.history.p4')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="demographics-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.demographics.title')}</h2>
            <p>{t('about.demographics.subtitle')}</p>
          </div>
          
          <div className="demographics-content">
            <div className="demographic-item">
              <div className="demographic-icon">
                <Users size={48} />
              </div>
              <h3>{t('about.demographics.population.title')}</h3>
              <p>{t('about.demographics.population.total')}</p>
              <ul>
                <li>{t('about.demographics.population.male')}</li>
                <li>{t('about.demographics.population.female')}</li>
                <li>{t('about.demographics.population.children')}</li>
                <li>{t('about.demographics.population.youth')}</li>
                <li>{t('about.demographics.population.adults')}</li>
                <li>{t('about.demographics.population.seniors')}</li>
              </ul>
            </div>
            
            <div className="demographic-item">
              <div className="demographic-icon">
                <Award size={48} />
              </div>
              <h3>{t('about.demographics.education.title')}</h3>
              <p>{t('about.demographics.education.rate')}</p>
              <ul>
                <li>{t('about.demographics.education.primary')}</li>
                <li>{t('about.demographics.education.secondary')}</li>
                <li>{t('about.demographics.education.graduates')}</li>
                <li>{t('about.demographics.education.higher')}</li>
                <li>{t('about.demographics.education.technical')}</li>
              </ul>
            </div>
            
            <div className="demographic-item">
              <div className="demographic-icon">
                <Map size={48} />
              </div>
              <h3>{t('about.demographics.geography.title')}</h3>
              <p>{t('about.demographics.geography.area')}</p>
              <ul>
                <li>{t('about.demographics.geography.agricultural')}</li>
                <li>{t('about.demographics.geography.residential')}</li>
                <li>{t('about.demographics.geography.forest')}</li>
                <li>{t('about.demographics.geography.water')}</li>
                <li>{t('about.demographics.geography.distance')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.achievements.title')}</h2>
            <p>{t('about.achievements.subtitle')}</p>
          </div>
          <div className="achievements-timeline">
            {achievements.map((achievement) => (
              <div key={achievement.year} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{achievement.year}</h3>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;