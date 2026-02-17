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
      title: 'Festivals, Fairs, and Pilgrimages',
      date: 'May 15, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'janori',
      description: 'JChaitra Fair (Yatra): Held once a year, this fair becomes a major cultural celebration for the entire village. It includes palanquin processions, bhajans, kirtans, dindis, chariot processions, and community feasts (bhandara). During the fair, people enjoy various attractions ranging from street stalls to cultural programs. Guru Purnima, worship during the Shravan month, and the Deepotsav in the Kartik month are also considered very important here.',
      category: 'History'
    },
     {
      id: 2,
      image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
      title: 'Social and Spiritual Activities',
      date: 'May 15, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Janori',
      description: 'Janori has libraries, gurukuls, and Sanskrit education centers that are well known for imparting religious education and moral values. Many youth groups, women’s groups, and village committees actively participate in social service. Village initiatives related to cleanliness, greenery, and water conservation serve as an example for other villages.',
      category: 'History'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
      title: 'Blood Donation Camp',
      date: 'May 15, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Village Community Hall',
      description: 'Join us for the annual blood donation camp organized in association with District Hospital.',
      category: 'health'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
      title: 'Farmers Training Program',
      date: 'June 2, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'Agricultural Extension Center',
      description: 'Learn about modern farming techniques and government schemes for farmers.',
      category: 'agriculture'
    },
    {
      id: 5,
      image: 'data:image/jpeg;base64,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',
      title: 'Student training program',
      date: 'aug 22, 2026',
      time: '10:30 AM - 1:00 PM',
      location: 'XYZ School',
      description: 'Learn about modern education techniques and government schemes for students.',
      category: 'education'
    },
    {
      id: 6,
      image: 'data:image/jpeg;base64,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',
      title: 'child polio dose',
      date: 'sep 21, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'ABC Hospital',
      description: 'Child health and care',
      category: 'children,s growth'
    },
    {
      id: 7,
      image: 'data:image/jpeg;base64,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',
      title: 'Blood Donation',
      date: '03 may, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'ABC Hospital',
      description: 'Donating blood saves a life',
      category: 'Blood donation'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      title: 'Village Cleanliness Drive',
      date: 'June 10, 2026',
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