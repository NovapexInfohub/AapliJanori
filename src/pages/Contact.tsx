import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import HeroSection from '../components/HeroSection';
import '../styles/Contact.css';

// Define the shape of the success/error message state
type SubmitMessageType = {
  type: 'success' | 'error';
  text: string;
} | null;

const Contact = () => {
  const { t } = useTranslation();
  
  // FIX 1: specific type for the form Ref (HTMLFormElement) and initialized null
  const form = useRef<HTMLFormElement>(null);

  // --- YOUR EMAILJS CREDENTIALS ---
  const SERVICE_ID = "service_yne6s0p";
  const ADMIN_TEMPLATE_ID = "template_gzcmwxs";
  const USER_TEMPLATE_ID = "template_yz7nwl8";
  const PUBLIC_KEY = "pc4JAPTpSLesoljvz";
  // --------------------------------

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // FIX 2: Added the generic type <SubmitMessageType> so it knows it can be an object or null
  const [submitMessage, setSubmitMessage] = useState<SubmitMessageType>(null);

  // FIX 3: Added React.ChangeEvent type for the input event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // FIX 4: Added React.FormEvent type for the submit event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,     
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await Promise.all([
        // 1. Send Admin Email
        emailjs.send(
          SERVICE_ID,
          ADMIN_TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        ),
        
        // 2. Send User Auto-Reply
        emailjs.send(
          SERVICE_ID,
          USER_TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        )
      ]);

      setSubmitMessage({
        type: 'success',
        text: t('contact.form.success')
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage({
        type: 'error',
        text: t('contact.form.error')
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(null), 8000);
    }
  };

  return (
    <div className="contact-page">
      <HeroSection 
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        backgroundImage="https://images.pexels.com/photos/1655901/pexels-photo-1655901.jpeg"
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>{t('contact.getInTouch.title')}</h2>
              <p>{t('contact.getInTouch.description')}</p>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>{t('contact.address.title')}</h3>
                    <p>
                      {t('contact.address.line1')}<br />
                      {t('contact.address.line2')}<br />
                      {t('contact.address.line3')}
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>{t('contact.phone.title')}</h3>
                    <p>
                      {t('contact.phone.office')}<br />
                      {t('contact.phone.sarpanch')}
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>{t('contact.email.title')}</h3>
                    <p>
                      {t('contact.email.primary')}<br />
                      {t('contact.email.help')}
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>{t('contact.hours.title')}</h3>
                    <p>
                      {t('contact.hours.weekdays')}<br />
                      {t('contact.hours.holidays')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>{t('contact.form.title')}</h2>
              
              <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`submit-message ${submitMessage.type === 'success' ? 'success' : 'error'}`}>
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('contact.map.title')}</h2>
            <p>{t('contact.map.subtitle')}</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.347573420857!2d76.59378607584107!3d20.932916986967527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7490216694631%3A0x6b1670601460598!2sJanori%2C%20Maharashtra%20444303!5e0!3m2!1sen!2sin!4v1709228811111!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Janori Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;