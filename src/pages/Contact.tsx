import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import HeroSection from '../components/HeroSection';
import '../styles/Contact.css';

type SubmitMessageType = {
  type: 'success' | 'error';
  text: string;
} | null;

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const SERVICE_ID = "service_yne6s0p";
  const ADMIN_TEMPLATE_ID = "template_gzcmwxs";
  const USER_TEMPLATE_ID = "template_yz7nwl8";
  const PUBLIC_KEY = "pc4JAPTpSLesoljvz";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<SubmitMessageType>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

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
        emailjs.send(
          SERVICE_ID,
          ADMIN_TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        ),
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

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

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

            {/* Contact Info */}
            <div className="contact-info">
              <h2>{t('contact.getInTouch.title')}</h2>
              <p>{t('contact.getInTouch.description')}</p>

              <div className="contact-details">

                <div className="contact-item">
                  <MapPin size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>{t('contact.address.title')}</h3>
                    <p>
                      Janori<br />
                      Taluka - Shegaon<br />
                      District - Buldhana, Maharashtra - 444303
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

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>{t('contact.form.title')}</h2>

              <form className="contact-form" ref={form} onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>

                {submitMessage && (
                  <div
                    className={`submit-message ${
                      submitMessage.type === 'success' ? 'success' : 'error'
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ Updated Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('contact.map.title')}</h2>
            <p>{t('contact.map.subtitle')}</p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=Janori,Buldhana,Maharashtra&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Janori Buldhana Maharashtra Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;