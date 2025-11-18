import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

export const NotFound: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'notFound.title' }),
    message: formatMessage({ id: 'notFound.message' }),
    backHome: formatMessage({ id: 'notFound.backHome' })
  };

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">{intl.title}</h1>
        <p className="not-found__message">{intl.message}</p>
        <Link to="/" className="not-found__link">
          {intl.backHome}
        </Link>
      </div>
    </div>
  );
};

