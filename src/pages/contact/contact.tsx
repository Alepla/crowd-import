import { useState } from 'react';
import { useIntl } from 'react-intl';

export const Contact: React.FC = () => {
  const { formatMessage } = useIntl();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const intl = {
    title: formatMessage({ id: 'contact.title' }),
    subtitle: formatMessage({ id: 'contact.subtitle' }),
    name: formatMessage({ id: 'contact.name' }),
    namePlaceholder: formatMessage({ id: 'contact.namePlaceholder' }),
    email: formatMessage({ id: 'contact.email' }),
    emailPlaceholder: formatMessage({ id: 'contact.emailPlaceholder' }),
    subject: formatMessage({ id: 'contact.subject' }),
    subjectPlaceholder: formatMessage({ id: 'contact.subjectPlaceholder' }),
    message: formatMessage({ id: 'contact.message' }),
    messagePlaceholder: formatMessage({ id: 'contact.messagePlaceholder' }),
    sendButton: formatMessage({ id: 'contact.sendButton' }),
    sending: formatMessage({ id: 'contact.sending' }),
    successMessage: formatMessage({ id: 'contact.successMessage' }),
    errorMessage: formatMessage({ id: 'contact.errorMessage' }),
    required: formatMessage({ id: 'contact.required' }),
    contactInfo: formatMessage({ id: 'contact.contactInfo' }),
    emailLabel: formatMessage({ id: 'contact.emailLabel' }),
    phoneLabel: formatMessage({ id: 'contact.phoneLabel' }),
    addressLabel: formatMessage({ id: 'contact.addressLabel' })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Formulario enviado:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__header">
          <h1 className="contact-page__title">{intl.title}</h1>
          <p className="contact-page__subtitle">{intl.subtitle}</p>
        </div>

        <div className="contact-page__content">
          <div className="contact-page__form-section">
            <form onSubmit={handleSubmit} className="contact-page__form">
              <div className="contact-page__field">
                <label htmlFor="name" className="contact-page__label">
                  {intl.name} <span className="contact-page__required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-page__input"
                  placeholder={intl.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="email" className="contact-page__label">
                  {intl.email} <span className="contact-page__required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-page__input"
                  placeholder={intl.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="subject" className="contact-page__label">
                  {intl.subject} <span className="contact-page__required">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="contact-page__select"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">{intl.subjectPlaceholder}</option>
                  <option value="general">{formatMessage({ id: 'contact.subjectGeneral' })}</option>
                  <option value="product">{formatMessage({ id: 'contact.subjectProduct' })}</option>
                  <option value="support">{formatMessage({ id: 'contact.subjectSupport' })}</option>
                  <option value="partnership">{formatMessage({ id: 'contact.subjectPartnership' })}</option>
                </select>
              </div>

              <div className="contact-page__field">
                <label htmlFor="message" className="contact-page__label">
                  {intl.message} <span className="contact-page__required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-page__textarea"
                  placeholder={intl.messagePlaceholder}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="contact-page__success">
                  {intl.successMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact-page__error">
                  {intl.errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="contact-page__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? intl.sending : intl.sendButton}
              </button>
            </form>
          </div>

          <div className="contact-page__info-section">
            <h2 className="contact-page__info-title">{intl.contactInfo}</h2>
            
            <div className="contact-page__info-item">
              <div className="contact-page__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-page__info-content">
                <h3 className="contact-page__info-label">{intl.emailLabel}</h3>
                <a href="mailto:info@nufold.com" className="contact-page__info-link">
                  info@nufold.com
                </a>
              </div>
            </div>

            <div className="contact-page__info-item">
              <div className="contact-page__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-page__info-content">
                <h3 className="contact-page__info-label">{intl.phoneLabel}</h3>
                <a href="tel:+34900123456" className="contact-page__info-link">
                  +34 900 123 456
                </a>
              </div>
            </div>

            <div className="contact-page__info-item">
              <div className="contact-page__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-page__info-content">
                <h3 className="contact-page__info-label">{intl.addressLabel}</h3>
                <p className="contact-page__info-text">
                  {formatMessage({ id: 'contact.address' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

