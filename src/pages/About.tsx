import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import { Users, Award, Map } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      year: '2023',
      title: 'State-level Clean Village Award',
      description: 'Recognized for exemplary waste management and sanitation practices.',
    },
    {
      year: '2022',
      title: '100% Digital Literacy',
      description: 'Achieved digital literacy for all residents between the ages of 14-60 years.',
    },
    {
      year: '2021',
      title: 'Water Conservation Model Village',
      description: 'Implemented innovative water harvesting and conservation techniques.',
    },
    {
      year: '2020',
      title: 'Open Defecation Free Status',
      description: 'Successfully achieved and maintained ODF status with 100% toilet coverage.',
    },
    {
      year: '2018',
      title: 'Solar Energy Adoption',
      description: 'First village in the district to adopt solar energy for street lighting and public facilities.',
    },
  ];

  return (
    <div className="about-page">
      <HeroSection 
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="village-info-section">
        <div className="container">
          <div className="village-info-content">
            <div className="village-image">
              <img 
                src="https://i.ytimg.com/vi/s2OJzfFIQ10/maxresdefault.jpg" 
                alt="Janori Village Scenery" 
              />
              <br></br>
              <img 
               src="https://www.memeraki.com/cdn/shop/articles/Screenshot_2023-02-01_at_3.27.33_AM_1200x1200.png?v=1675202595"
              alt="Janori Village Scenery" 
              />
            </div>
            <div className="village-text">
              <h2>{t('about.history.title', 'Village History')}</h2>
              <p>{t('about.history.p1', 'A Sacred and Historic Religious Place in Vidarbha. Janori is a village located in the Buldhana district of Maharashtra, about 8 to 10 kilometers from Shegaon. The village is well known across Vidarbha for its ancient temples, traditional architectural style, religious customs, and spiritually charged atmosphere.')}</p>
              <p>{t('1. Historical Background The temples of Janori were built in the 17th century. Since then, the village has acquired the status of an important religious pilgrimage center. From ancient times, saints, sages, and ascetics have resided in this village. Some of the temples in the village reflect architectural styles from the Peshwa period.')}</p>
              <p>{t('about.history.p2', '2. Major Religious PlacesLord Narasimha TempleThis is the most prominent religious center of the village. The temple’s spire, sanctum (garbhagriha), and hall (mandap) display excellent stone craftsmanship.The temple area has dedicated spaces for meditation and religious discourses.Narasimha Jayanti is celebrated with great devotion, during which thousands of devotees visit for darshan.Mahadev Temple Located in the central part of the village, this temple hosts an all-night grand worship and vigil on the occasion of Maha Shivaratri.Mahasiddha Bhagwan TempleThis temple has a history of secret spiritual practices and tantric worship. Devotees visit here seeking good health and fulfillment of wishes.Temples of Lord Rama, Lakshmana, Sita, and Hanuman Festivals such as Ram Navami and Hanuman Jayanti are celebrated here with great enthusiasm.')}</p>
              <p>{t('about.history.p3', '3. Information for Tourists and DevoteesThe village is easily accessible from Shegaon bus stand and railway station.Facilities such as pilgrim accommodation, dining arrangements, drinking water, and clean sanitation are available in the village. Local guides are also available for visitors and devotees.The nearby scenic surroundings, green farmlands, and peaceful environment further attract tourists.')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="demographics-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.demographics.title', 'Village Demographics')}</h2>
            <p>{t('about.demographics.subtitle', 'Key facts about the people and land')}</p>
          </div>
          
          <div className="demographics-content">
            <div className="demographic-item">
              <div className="demographic-icon">
                <Users size={48} />
              </div>
              <h3>{t('about.demographics.population.title', 'Population')}</h3>
              <p>{t('about.demographics.population.total', 'Approx. 5,000 residents')}</p>
              <ul>
                <li>{t('about.demographics.population.male', '2,600 Males')}</li>
                <li>{t('about.demographics.population.female', '2,400 Females')}</li>
                <li>{t('about.demographics.population.children', '1,200 Children')}</li>
                <li>{t('about.demographics.population.youth', '1,500 Youth')}</li>
                <li>{t('about.demographics.population.adults', '2,000 Adults')}</li>
                <li>{t('about.demographics.population.seniors', '300 Seniors')}</li>
              </ul>
            </div>
            
            <div className="demographic-item">
              <div className="demographic-icon">
                <Award size={48} />
              </div>
              <h3>{t('about.demographics.education.title', 'Education')}</h3>
              <p>{t('about.demographics.education.rate', 'Literacy rate: 85%')}</p>
              <ul>
                <li>{t('about.demographics.education.primary', 'Primary School: 500 students')}</li>
                <li>{t('about.demographics.education.secondary', 'Secondary School: 300 students')}</li>
                <li>{t('about.demographics.education.graduates', '150 Graduates')}</li>
                <li>{t('about.demographics.education.higher', '50 Higher Education students')}</li>
                <li>{t('about.demographics.education.technical', '30 pursuing Technical Education')}</li>
              </ul>
            </div>
            
            <div className="demographic-item">
              <div className="demographic-icon">
                <Map size={48} />
              </div>
              <h3>{t('about.demographics.geography.title', 'Geography')}</h3>
              <p>{t('about.demographics.geography.area', 'Total Area: 10 sq. km')}</p>
              <ul>
                <li>{t('about.demographics.geography.agricultural', '7 sq. km Agricultural land')}</li>
                <li>{t('about.demographics.geography.residential', '2 sq. km Residential')}</li>
                <li>{t('about.demographics.geography.forest', '0.5 sq. km Forest')}</li>
                <li>{t('about.demographics.geography.water', '0.5 sq. km Water bodies')}</li>
                <li>{t('about.demographics.geography.distance', '12 km from Shegaon')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.achievements.title', 'Village Achievements')}</h2>
            <p>{t('about.achievements.subtitle', 'Recognitions and milestones that make us proud')}</p>
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