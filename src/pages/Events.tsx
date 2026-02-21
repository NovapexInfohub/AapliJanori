import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { Calendar, Search } from 'lucide-react';
import '../styles/Events.css';
import { useTranslation } from 'react-i18next';

interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

const Events = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: '',
    category: ''
  });

  const [showProposalForm, setShowProposalForm] = useState(false);
  const [proposal, setProposal] = useState({
    name: '',
    email: '',
    title: '',
    date: '',
    description: ''
  });
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  const [isAdmin] = useState(typeof window !== 'undefined' && window.localStorage.getItem('isAdmin') === 'true');
  
  // Get events from translation with proper typing
  const [eventList, setEventList] = useState<Event[]>([]);
  const [proposals, setProposals] = useState<any[]>([]);

  // Load events when language changes
  useEffect(() => {
    const translatedEvents = t('events.eventList', { returnObjects: true }) as Event[];
    setEventList(translatedEvents);
  }, [i18n.language, t]);

  const categories = ['all', ...new Set(eventList.map(event => event.category))];

  const filteredEvents = eventList
    .filter(event => filterCategory === 'all' || event.category === filterCategory)
    .filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const getCategoryDisplayName = (category: string) => {
    if (category === 'all') return t('events.filter.all');
    return t(`events.categories.${category}`) || category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="events-page">
      <HeroSection 
        title={t('events.hero.title')}
        subtitle={t('events.hero.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="events-list-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('events.section.title')}</h2>
            <p>{t('events.section.subtitle')}</p>
          </div>

          {isAdmin && (
            <div style={{marginBottom: '1.5rem', textAlign: 'right'}}>
              <button className="btn-primary" onClick={() => setShowEventForm(true)}>
                {t('events.admin.uploadEvent')}
              </button>
            </div>
          )}

          <div className="events-filter">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder={t('events.filter.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-filter">
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                  onClick={() => setFilterCategory(category)}
                >
                  {getCategoryDisplayName(category)}
                </button>
              ))}
            </div>
          </div>

          {showEventForm && (
            <div className="event-upload-modal">
              <form onSubmit={e => {
                e.preventDefault();
                setEventList(prev => [
                  ...prev,
                  { id: prev.length + 1, ...newEvent }
                ]);
                setShowEventForm(false);
                setNewEvent({ title: '', date: '', time: '', location: '', description: '', image: '', category: '' });
              }}>
                <h2>{t('events.eventForm.title')}</h2>
                <input 
                  type="text" 
                  placeholder={t('events.eventForm.fields.title')} 
                  value={newEvent.title} 
                  onChange={e => setNewEvent(ev => ({...ev, title: e.target.value}))} 
                  required 
                />
                <input 
                  type="date" 
                  placeholder={t('events.eventForm.fields.date')} 
                  value={newEvent.date} 
                  onChange={e => setNewEvent(ev => ({...ev, date: e.target.value}))} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder={t('events.eventForm.fields.time')} 
                  value={newEvent.time} 
                  onChange={e => setNewEvent(ev => ({...ev, time: e.target.value}))} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder={t('events.eventForm.fields.location')} 
                  value={newEvent.location} 
                  onChange={e => setNewEvent(ev => ({...ev, location: e.target.value}))} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder={t('events.eventForm.fields.imageUrl')} 
                  value={newEvent.image} 
                  onChange={e => setNewEvent(ev => ({...ev, image: e.target.value}))} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder={t('events.eventForm.fields.category')} 
                  value={newEvent.category} 
                  onChange={e => setNewEvent(ev => ({...ev, category: e.target.value}))} 
                  required 
                />
                <textarea 
                  placeholder={t('events.eventForm.fields.description')} 
                  value={newEvent.description} 
                  onChange={e => setNewEvent(ev => ({...ev, description: e.target.value}))} 
                  required 
                />
                <div>
                  <button type="button" onClick={() => setShowEventForm(false)}>{t('events.eventForm.buttons.cancel')}</button>
                  <button type="submit">{t('events.eventForm.buttons.addEvent')}</button>
                </div>
              </form>
            </div>
          )}

          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map(event => (
                <div key={event.id} style={{ position: 'relative' }}>
                  <EventCard 
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    description={event.description}
                  />
                  {isAdmin && (
                    <button
                      onClick={() => setEventList(prev => prev.filter(e => e.id !== event.id))}
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        padding: '5px 10px',
                        cursor: 'pointer'
                      }}
                    >
                      {t('events.deleteBtn')}
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <Calendar size={48} />
              <h3>{t('events.noEvents.title')}</h3>
              <p>{t('events.noEvents.message')}</p>
            </div>
          )}
        </div>
      </section>

      <section className="event-proposal-section">
        <div className="container">
          <div className="proposal-content">
            <h2>{t('events.proposal.section.title')}</h2>
            <p>{t('events.proposal.section.message')}</p>
            <button className="btn-primary" onClick={() => setShowProposalForm(true)}>
              {t('events.proposal.section.proposeBtn')}
            </button>
          </div>

          {isAdmin && proposals.length > 0 && (
            <div>
              <h3>{t('events.proposal.admin.title')}</h3>
              <ul>
                {proposals.map((p, idx) => (
                  <li key={idx}>
                    <strong>{p.title}</strong> ({p.date})<br />
                    {p.description}<br />
                    {t('events.proposal.admin.by')}: {p.name} ({p.email})
                    <button onClick={() => setProposals(prev => prev.filter((_, i) => i !== idx))}>
                      {t('events.proposal.admin.delete')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {showProposalForm && (
          <div className="proposal-modal">
            <form onSubmit={e => {
              e.preventDefault();
              setProposalSubmitted(true);
              setProposals(prev => [...prev, proposal]);
              setTimeout(() => {
                setShowProposalForm(false);
                setProposalSubmitted(false);
                setProposal({ name: '', email: '', title: '', date: '', description: '' });
              }, 2000);
            }}>
              <h2>{t('events.proposal.form.title')}</h2>
              {proposalSubmitted ? (
                <p>{t('events.proposal.form.success')}</p>
              ) : (
                <>
                  <input 
                    type="text" 
                    placeholder={t('events.proposal.form.fields.name')} 
                    value={proposal.name} 
                    onChange={e => setProposal(p => ({...p, name: e.target.value}))} 
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder={t('events.proposal.form.fields.email')} 
                    value={proposal.email} 
                    onChange={e => setProposal(p => ({...p, email: e.target.value}))} 
                    required 
                  />
                  <input 
                    type="text" 
                    placeholder={t('events.proposal.form.fields.eventTitle')} 
                    value={proposal.title} 
                    onChange={e => setProposal(p => ({...p, title: e.target.value}))} 
                    required 
                  />
                  <input 
                    type="date" 
                    placeholder={t('events.proposal.form.fields.eventDate')} 
                    value={proposal.date} 
                    onChange={e => setProposal(p => ({...p, date: e.target.value}))} 
                    required 
                  />
                  <textarea 
                    placeholder={t('events.proposal.form.fields.description')} 
                    value={proposal.description} 
                    onChange={e => setProposal(p => ({...p, description: e.target.value}))} 
                    required 
                  />
                  <button type="submit">{t('events.proposal.form.buttons.submit')}</button>
                  <button type="button" onClick={() => setShowProposalForm(false)}>
                    {t('events.proposal.form.buttons.cancel')}
                  </button>
                </>
              )}
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Events;