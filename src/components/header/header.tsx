import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useAuthStore } from '../../stores/auth-store';
import { ROUTES } from '../../constants';
import { IconButton, ICON_BUTTON_TYPE } from '../icon-button';
import { renderDashboardIcon, renderLogoutIcon, renderLoginIcon, renderLogoIcon } from '../../resources/icons';

export const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  
  const intl = {
    title: formatMessage({ id: 'app.title' }),
    tagline: formatMessage({ id: 'app.tagline' }),
    products: formatMessage({ id: 'header.products' }),
    dashboard: formatMessage({ id: 'header.dashboard' }),
    landing: formatMessage({ id: 'header.landing' }),
    login: formatMessage({ id: 'header.login' }),
    logout: formatMessage({ id: 'header.logout' })
  };

  const renderAuthButton = () => {
    if (isAuthenticated) {
      return (
        <IconButton
          icon={renderLogoutIcon()}
          onClick={logout}
          className="header__cta-button"
          ariaLabel={intl.logout}
          title={intl.logout}
        />
      );
    }

    return (
      <IconButton
        icon={renderLoginIcon()}
        to={ROUTES.LOGIN}
        className="header__cta-button"
        ariaLabel={intl.login}
        title={intl.login}
        type={ICON_BUTTON_TYPE.LINK}
      />
    );
  };

  return (
    <header className="header">
      <div className="header__container">
        <IconButton
          icon={
            <div className="header__logo-icon">
              {renderLogoIcon()}
            </div>
          }
          to={ROUTES.LANDING}
          type={ICON_BUTTON_TYPE.LINK}
          className="header__logo"
        >
          <h1>{intl.title}</h1>
        </IconButton>
        
        <nav className="header__nav">
          <IconButton
            icon={renderDashboardIcon()}
            onClick={() => navigate(ROUTES.DASHBOARD)}
            className="header__icon-button"
            ariaLabel={intl.dashboard}
            title={intl.dashboard}
          />
          {renderAuthButton()}
        </nav>
      </div>
    </header>
  );
};

