import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

export const Footer: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'app.title' }),
    tagline: formatMessage({ id: 'app.tagline' }),
    quickLinks: formatMessage({ id: 'footer.quickLinks' }),
    products: formatMessage({ id: 'header.products' }),
    about: formatMessage({ id: 'header.about' }),
    contact: formatMessage({ id: 'header.contact' }),
    faq: formatMessage({ id: 'header.faq' }),
    followUs: formatMessage({ id: 'footer.followUs' }),
    contactSection: formatMessage({ id: 'footer.contact' }),
    email: formatMessage({ id: 'footer.email' }),
    phone: formatMessage({ id: 'footer.phone' }),
    rights: formatMessage({ id: 'footer.rights' }),
    privacyPolicy: formatMessage({ id: 'footer.privacyPolicy' }),
    termsOfService: formatMessage({ id: 'footer.termsOfService' })
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">{intl.title}</h3>
            <p className="footer__tagline">{intl.tagline}</p>
            <p className="footer__description">
              {formatMessage({ id: 'footer.description' })}
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{intl.quickLinks}</h4>
            <nav className="footer__nav">
              <Link to="/" className="footer__link">{intl.products}</Link>
              <Link to="/about" className="footer__link">{intl.about}</Link>
              <Link to="/contact" className="footer__link">{intl.contact}</Link>
              <Link to="/faq" className="footer__link">{intl.faq}</Link>
            </nav>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{intl.followUs}</h4>
            <div className="footer__social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{intl.contactSection}</h4>
            <div className="footer__contact">
              <a href="mailto:info@nufold.com" className="footer__contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {intl.email}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">{intl.privacyPolicy}</Link>
            <span className="footer__separator">•</span>
            <Link to="/terms" className="footer__legal-link">{intl.termsOfService}</Link>
          </div>
          <p className="footer__copyright">
            © {new Date().getFullYear()} {intl.title}. {intl.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

