import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { Calendar, Search } from 'lucide-react';
import '../styles/Events.css';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();
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
  const events = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
      title: 'Blood Donation Camp',
      date: 'May 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Village Community Hall',
      description: 'Join us for the annual blood donation camp organized in association with District Hospital.',
      category: 'health'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
      title: 'Farmers Training Program',
      date: 'June 2, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Agricultural Extension Center',
      description: 'Learn about modern farming techniques and government schemes for farmers.',
      category: 'agriculture'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      title: 'Village Cleanliness Drive',
      date: 'June 10, 2025',
      time: '7:00 AM - 11:00 AM',
      location: 'Village Square',
      description: 'Community initiative to clean our village and promote proper waste management practices.',
      category: 'environment'
    }
  ];

  const [eventList, setEventList] = useState(events);
  const [proposals, setProposals] = useState<any[]>([]);

  const categories = ['all', ...new Set(events.map(event => event.category))];

  const filteredEvents = eventList
    .filter(event => filterCategory === 'all' || event.category === filterCategory)
    .filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="events-page">
      <HeroSection 
        title="Village Events" 
        subtitle="Stay updated with all the activities happening in Janori"
        backgroundImage="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="events-list-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Be a part of our community gatherings and activities</p>
          </div>

          {isAdmin && (
            <div style={{marginBottom: '1.5rem', textAlign: 'right'}}>
              <button className="btn-primary" onClick={() => setShowEventForm(true)}>
                Upload Event
              </button>
            </div>
          )}

          <div className="events-filter">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search events..."
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
                  {category.charAt(0).toUpperCase() + category.slice(1)}
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
                <h2>Upload Event</h2>
                <input type="text" placeholder="Title" value={newEvent.title} onChange={e => setNewEvent(ev => ({...ev, title: e.target.value}))} required />
                <input type="date" placeholder="Date" value={newEvent.date} onChange={e => setNewEvent(ev => ({...ev, date: e.target.value}))} required />
                <input type="text" placeholder="Time" value={newEvent.time} onChange={e => setNewEvent(ev => ({...ev, time: e.target.value}))} required />
                <input type="text" placeholder="Location" value={newEvent.location} onChange={e => setNewEvent(ev => ({...ev, location: e.target.value}))} required />
                <input type="text" placeholder="Image URL" value={newEvent.image} onChange={e => setNewEvent(ev => ({...ev, image: e.target.value}))} required />
                <input type="text" placeholder="Category" value={newEvent.category} onChange={e => setNewEvent(ev => ({...ev, category: e.target.value}))} required />
                <textarea placeholder="Description" value={newEvent.description} onChange={e => setNewEvent(ev => ({...ev, description: e.target.value}))} required />
                <div>
                  <button type="button" onClick={() => setShowEventForm(false)}>Cancel</button>
                  <button type="submit">Add Event</button>
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
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <Calendar size={48} />
              <h3>No events found</h3>
              <p>Try changing your search criteria or check back later.</p>
            </div>
          )}
        </div>
      </section>

      <section className="event-proposal-section">
        <div className="container">
          <div className="proposal-content">
            <h2>Have an Event Idea?</h2>
            <p>We welcome community-driven events. Share your idea with us!</p>
            <button className="btn-primary" onClick={() => setShowProposalForm(true)}>Propose an Event</button>
          </div>

          {isAdmin && proposals.length > 0 && (
            <div>
              <h3>Proposed Events</h3>
              <ul>
                {proposals.map((p, idx) => (
                  <li key={idx}>
                    <strong>{p.title}</strong> ({p.date})<br />
                    {p.description}<br />
                    By: {p.name} ({p.email})
                    <button onClick={() => setProposals(prev => prev.filter((_, i) => i !== idx))}>Delete</button>
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
              <h2>Propose an Event</h2>
              {proposalSubmitted ? (
                <p>Thank you for your suggestion!</p>
              ) : (
                <>
                  <input type="text" placeholder="Your Name" value={proposal.name} onChange={e => setProposal(p => ({...p, name: e.target.value}))} required />
                  <input type="email" placeholder="Your Email" value={proposal.email} onChange={e => setProposal(p => ({...p, email: e.target.value}))} required />
                  <input type="text" placeholder="Event Title" value={proposal.title} onChange={e => setProposal(p => ({...p, title: e.target.value}))} required />
                  <input type="date" placeholder="Event Date" value={proposal.date} onChange={e => setProposal(p => ({...p, date: e.target.value}))} required />
                  <textarea placeholder="Event Description" value={proposal.description} onChange={e => setProposal(p => ({...p, description: e.target.value}))} required />
                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setShowProposalForm(false)}>Cancel</button>
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