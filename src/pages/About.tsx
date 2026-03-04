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

  const groups = [
    {
      id: 'jayGajanan',
      name: t('about.groups.mandals.jayGajanan.name'),
      description: t('about.groups.mandals.jayGajanan.description'),
      established: '1995',
      image: 'https://img.freepik.com/premium-photo/isolated-traditional-indian-dhol-drum-with-vibrant-decorations_995162-32151.jpg',
      activities: [
        t('about.groups.mandals.jayGajanan.activities.ganeshChaturthi'),
        t('about.groups.mandals.jayGajanan.activities.culturalPrograms'),
        t('about.groups.mandals.jayGajanan.activities.communityFeast')
      ]
    },
    {
      id: 'sadbhavna',
      name: t('about.groups.mandals.sadbhavna.name'),
      description: t('about.groups.mandals.sadbhavna.description'),
      established: '2002',
      image: 'https://img.freepik.com/premium-photo/isolated-traditional-indian-dhol-drum-with-vibrant-decorations_995162-32151.jpg',
      activities: [
        t('about.groups.mandals.sadbhavna.activities.religiousCeremonies'),
        t('about.groups.mandals.sadbhavna.activities.socialAwareness'),
        t('about.groups.mandals.sadbhavna.activities.youthEngagement')
      ]
    },
    {
      id: 'shivyug',
      name: t('about.groups.mandals.shivyug.name'),
      description: t('about.groups.mandals.shivyug.description'),
      established: '2008',
      image: 'https://img.freepik.com/premium-photo/isolated-traditional-indian-dhol-drum-with-vibrant-decorations_995162-32151.jpg',
      activities: [
        t('about.groups.mandals.shivyug.activities.traditionalPuja'),
        t('about.groups.mandals.shivyug.activities.artCompetitions'),
        t('about.groups.mandals.shivyug.activities.culturalShows')
      ]
    },
    {
      id: 'mauli',
      name: t('about.groups.mandals.mauli.name'),
      description: t('about.groups.mandals.mauli.description'),
      established: '2010',
      image: 'https://img.freepik.com/premium-photo/isolated-traditional-indian-dhol-drum-with-vibrant-decorations_995162-32151.jpg',
      activities: [
        t('about.groups.mandals.mauli.activities.womenEmpowerment'),
        t('about.groups.mandals.mauli.activities.childrenPrograms'),
        t('about.groups.mandals.mauli.activities.healthCamps')
      ]
    },
    {
      id: 'shivShakti',
      name: t('about.groups.mandals.shivShakti.name'),
      description: t('about.groups.mandals.shivShakti.description'),
      established: '2012',
      image: 'https://img.freepik.com/premium-photo/isolated-traditional-indian-dhol-drum-with-vibrant-decorations_995162-32151.jpg',
      activities: [
        t('about.groups.mandals.shivShakti.activities.navratriCelebration'),
        t('about.groups.mandals.shivShakti.activities.garbaNights'),
        t('about.groups.mandals.shivShakti.activities.religiousDiscourses')
      ]
    },
    {
      id: 'bhajani',
      name: t('about.groups.mandals.bhajani.name'),
      description: t('about.groups.mandals.bhajani.description'),
      established: '1985',
      image: 'https://img.freepik.com/premium-photo/isolated-traditional-indian-dhol-drum-with-vibrant-decorations_995162-32151.jpg',
      activities: [
        t('about.groups.mandals.bhajani.activities.dailyBhajans'),
        t('about.groups.mandals.bhajani.activities.religiousFestivals'),
        t('about.groups.mandals.bhajani.activities.spiritualGatherings')
      ]
    }
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
              <br />
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

      <section className="groups-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.groups.title')}</h2>
            <p>{t('about.groups.subtitle')}</p>
          </div>
          
          <div className="groups-grid">
            {groups.map((group, index) => (
              <div key={index} className="group-card">
                <div className="group-image">
                  <img src={group.image} alt={group.name} />
                </div>
                <div className="group-content">
                  <h3>{group.name}</h3>
                  <p className="group-established">{t('about.groups.established', { year: group.established })}</p>
                  <p className="group-description">{group.description}</p>
                  <div className="group-activities">
                    <h4>{t('about.groups.keyActivities')}</h4>
                    <ul>
                      {group.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
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