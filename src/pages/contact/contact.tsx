import { Layout, Button, BUTTON_TYPE, SelectField, FormField } from '../../components';
import { useContact } from './hooks/use-contact';
import { renderEmailIcon, renderPhoneIcon, renderLocationIcon } from '../../resources/icons';
import { ContactInfoItem } from './components';

export const Contact: React.FC = () => {
  const {
    formData,
    isSubmitting,
    intl,
    handleChange,
    handleSubmit,
    isSuccess,
    isError,
    submitButtonText,
    subjectOptions
  } = useContact();

  return (
    <Layout
      className="contact-page"
      title={intl.title}
      subtitle={intl.subtitle}
    >
      <div className="contact-page__content">
          <div className="contact-page__form-section">
            <form onSubmit={handleSubmit} className="contact-page__form">
              <FormField
                id="name"
                name="name"
                label={intl.name}
                type="text"
                value={formData.name}
                onChange={(value) => {
                  const syntheticEvent = {
                    target: { name: 'name', value }
                  } as React.ChangeEvent<HTMLInputElement>;
                  handleChange(syntheticEvent);
                }}
                placeholder={intl.namePlaceholder}
                required
                disabled={isSubmitting}
                classNamePrefix="contact-page"
                showRequiredIndicator
              />

              <FormField
                id="email"
                name="email"
                label={intl.email}
                type="email"
                value={formData.email}
                onChange={(value) => {
                  const syntheticEvent = {
                    target: { name: 'email', value }
                  } as React.ChangeEvent<HTMLInputElement>;
                  handleChange(syntheticEvent);
                }}
                placeholder={intl.emailPlaceholder}
                required
                disabled={isSubmitting}
                classNamePrefix="contact-page"
                showRequiredIndicator
              />

              <SelectField
                id="subject"
                name="subject"
                label={intl.subject}
                value={formData.subject}
                onChange={(value) => {
                  const syntheticEvent = {
                    target: { name: 'subject', value }
                  } as React.ChangeEvent<HTMLSelectElement>;
                  handleChange(syntheticEvent);
                }}
                options={subjectOptions}
                classNamePrefix="contact-page"
                required
                disabled={isSubmitting}
                showRequiredIndicator
              />

              <FormField
                id="message"
                name="message"
                label={intl.message}
                type="textarea"
                value={formData.message}
                onChange={(value) => {
                  const syntheticEvent = {
                    target: { name: 'message', value }
                  } as React.ChangeEvent<HTMLTextAreaElement>;
                  handleChange(syntheticEvent);
                }}
                placeholder={intl.messagePlaceholder}
                rows={6}
                required
                disabled={isSubmitting}
                classNamePrefix="contact-page"
                showRequiredIndicator
              />

              {isSuccess && (
                <div className="contact-page__success">
                  {intl.successMessage}
                </div>
              )}

              {isError && (
                <div className="contact-page__error">
                  {intl.errorMessage}
                </div>
              )}

              <Button
                type={BUTTON_TYPE.SUBMIT}
                className="contact-page__submit"
                disabled={isSubmitting}
              >
                {submitButtonText}
              </Button>
            </form>
          </div>

          <div className="contact-page__info-section">
            <h2 className="contact-page__info-title">{intl.contactInfo}</h2>
            
            <ContactInfoItem
              icon={renderEmailIcon()}
              label={intl.emailLabel}
            >
              <a href="mailto:info@nufold.com" className="contact-page__info-link">
                info@nufold.com
              </a>
            </ContactInfoItem>

            <ContactInfoItem
              icon={renderPhoneIcon()}
              label={intl.phoneLabel}
            >
              <a href="tel:+34900123456" className="contact-page__info-link">
                +34 900 123 456
              </a>
            </ContactInfoItem>

            <ContactInfoItem
              icon={renderLocationIcon()}
              label={intl.addressLabel}
            >
              <p className="contact-page__info-text">
                {intl.address}
              </p>
            </ContactInfoItem>
          </div>
        </div>
    </Layout>
  );
};

