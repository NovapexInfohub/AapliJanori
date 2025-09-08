import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import '../styles/EventCard.css';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  time,
  location,
  description
}) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={image} alt={title} />
      </div>
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <div className="event-details">
          <div className="event-detail">
            <Calendar size={16} className="event-icon" />
            <span>{date}</span>
          </div>
          <div className="event-detail">
            <Clock size={16} className="event-icon" />
            <span>{time}</span>
          </div>
          <div className="event-detail">
            <MapPin size={16} className="event-icon" />
            <span>{location}</span>
          </div>
        </div>
        <p className="event-description">{description}</p>
        <button className="event-btn">Read More</button>
      </div>
    </div>
  );
};

export default EventCard;