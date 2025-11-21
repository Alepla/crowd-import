import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { ROUTES } from '../../constants';
import { IconButton, ICON_BUTTON_TYPE } from '../icon-button';
import { renderFacebookIcon, renderXIcon, renderInstagramIcon, renderLinkedInIcon, renderEmailIcon } from '../../resources/icons';

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com',
  X: 'https://x.com',
  INSTAGRAM: 'https://instagram.com',
  LINKEDIN: 'https://linkedin.com'
} as const;

export const Footer: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'app.title' }),
    tagline: formatMessage({ id: 'app.tagline' }),
    description: formatMessage({ id: 'footer.description' }),
    quickLinks: formatMessage({ id: 'footer.quickLinks' }),
    products: formatMessage({ id: 'header.products' }),
    landing: formatMessage({ id: 'header.landing' }),
    contact: formatMessage({ id: 'header.contact' }),
    faq: formatMessage({ id: 'header.faq' }),
    wishlist: formatMessage({ id: 'header.wishlist' }),
    myOrders: formatMessage({ id: 'header.myOrders' }),
    notifications: formatMessage({ id: 'header.notifications' }),
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
              {intl.description}
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{intl.quickLinks}</h4>
            <nav className="footer__nav">
              <Link to={ROUTES.LANDING} className="footer__link">{intl.landing}</Link>
              <Link to={ROUTES.PRODUCTS} className="footer__link">{intl.products}</Link>
              <Link to={ROUTES.WISHLIST} className="footer__link">{intl.wishlist}</Link>
              <Link to={ROUTES.MY_ORDERS} className="footer__link">{intl.myOrders}</Link>
              <Link to={ROUTES.NOTIFICATIONS} className="footer__link">{intl.notifications}</Link>
              <Link to={ROUTES.CONTACT} className="footer__link">{intl.contact}</Link>
              <Link to={ROUTES.FAQ} className="footer__link">{intl.faq}</Link>
            </nav>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{intl.followUs}</h4>
            <div className="footer__social">
              <IconButton
                icon={renderFacebookIcon()}
                href={SOCIAL_LINKS.FACEBOOK}
                className="footer__social-link"
                ariaLabel="Facebook"
                title="Facebook"
                type={ICON_BUTTON_TYPE.EXTERNAL}
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                icon={renderXIcon()}
                href={SOCIAL_LINKS.X}
                className="footer__social-link"
                ariaLabel="X"
                title="X"
                type={ICON_BUTTON_TYPE.EXTERNAL}
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                icon={renderInstagramIcon()}
                href={SOCIAL_LINKS.INSTAGRAM}
                className="footer__social-link"
                ariaLabel="Instagram"
                title="Instagram"
                type={ICON_BUTTON_TYPE.EXTERNAL}
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                icon={renderLinkedInIcon()}
                href={SOCIAL_LINKS.LINKEDIN}
                className="footer__social-link"
                ariaLabel="LinkedIn"
                title="LinkedIn"
                type={ICON_BUTTON_TYPE.EXTERNAL}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{intl.contactSection}</h4>
            <div className="footer__contact">
              <IconButton
                icon={renderEmailIcon()}
                href="mailto:info@nufold.com"
                className="footer__contact-link"
                ariaLabel={intl.email}
                title={intl.email}
                type={ICON_BUTTON_TYPE.EXTERNAL}
              >
                {intl.email}
              </IconButton>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <Link to={ROUTES.PRIVACY} className="footer__legal-link">{intl.privacyPolicy}</Link>
            <span className="footer__separator">•</span>
            <Link to={ROUTES.TERMS} className="footer__legal-link">{intl.termsOfService}</Link>
          </div>
          <p className="footer__copyright">
            © {CURRENT_YEAR} {intl.title}. {intl.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

