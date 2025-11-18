import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

export const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  
  const intl = {
    title: formatMessage({ id: 'app.title' }),
    tagline: formatMessage({ id: 'app.tagline' }),
    products: formatMessage({ id: 'header.products' }),
    dashboard: formatMessage({ id: 'header.dashboard' })
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1>{intl.title}</h1>
          <span className="header__tagline">{intl.tagline}</span>
        </Link>
        
        <nav className="header__nav">
          <Link to="/" className="header__link">{intl.products}</Link>
          <Link to="/dashboard" className="header__link">{intl.dashboard}</Link>
        </nav>
      </div>
    </header>
  );
};

