import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { formatLongDate } from '../../utils';

export const Terms: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'terms.title' }),
    lastUpdated: formatMessage({ id: 'terms.lastUpdated' }),
    introduction: formatMessage({ id: 'terms.introduction' }),
    acceptanceTitle: formatMessage({ id: 'terms.acceptanceTitle' }),
    acceptanceContent: formatMessage({ id: 'terms.acceptanceContent' }),
    serviceDescriptionTitle: formatMessage({ id: 'terms.serviceDescriptionTitle' }),
    serviceDescriptionContent: formatMessage({ id: 'terms.serviceDescriptionContent' }),
    userObligationsTitle: formatMessage({ id: 'terms.userObligationsTitle' }),
    userObligationsContent: formatMessage({ id: 'terms.userObligationsContent' }),
    paymentsTitle: formatMessage({ id: 'terms.paymentsTitle' }),
    paymentsContent: formatMessage({ id: 'terms.paymentsContent' }),
    cancellationsTitle: formatMessage({ id: 'terms.cancellationsTitle' }),
    cancellationsContent: formatMessage({ id: 'terms.cancellationsContent' }),
    liabilityTitle: formatMessage({ id: 'terms.liabilityTitle' }),
    liabilityContent: formatMessage({ id: 'terms.liabilityContent' }),
    intellectualPropertyTitle: formatMessage({ id: 'terms.intellectualPropertyTitle' }),
    intellectualPropertyContent: formatMessage({ id: 'terms.intellectualPropertyContent' }),
    modificationsTitle: formatMessage({ id: 'terms.modificationsTitle' }),
    modificationsContent: formatMessage({ id: 'terms.modificationsContent' }),
    terminationTitle: formatMessage({ id: 'terms.terminationTitle' }),
    terminationContent: formatMessage({ id: 'terms.terminationContent' }),
    applicableLawTitle: formatMessage({ id: 'terms.applicableLawTitle' }),
    applicableLawContent: formatMessage({ id: 'terms.applicableLawContent' }),
    contactTitle: formatMessage({ id: 'terms.contactTitle' }),
    contactContent: formatMessage({ id: 'terms.contactContent' }),
    backHome: formatMessage({ id: 'notFound.backHome' })
  };

  return (
    <div className="legal-page page-gradient">
      <div className="legal-page__container">
        <div className="legal-page__header">
          <h1 className="legal-page__title">{intl.title}</h1>
          <p className="legal-page__date">{intl.lastUpdated}: {formatLongDate(new Date())}</p>
        </div>

        <div className="legal-page__content">
          <section className="legal-page__section">
            <p className="legal-page__text">{intl.introduction}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.acceptanceTitle}</h2>
            <p className="legal-page__text">{intl.acceptanceContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.serviceDescriptionTitle}</h2>
            <p className="legal-page__text">{intl.serviceDescriptionContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.userObligationsTitle}</h2>
            <p className="legal-page__text">{intl.userObligationsContent}</p>
            <ul className="legal-page__list">
              <li>{formatMessage({ id: 'terms.userObligationsItem1' })}</li>
              <li>{formatMessage({ id: 'terms.userObligationsItem2' })}</li>
              <li>{formatMessage({ id: 'terms.userObligationsItem3' })}</li>
              <li>{formatMessage({ id: 'terms.userObligationsItem4' })}</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.paymentsTitle}</h2>
            <p className="legal-page__text">{intl.paymentsContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.cancellationsTitle}</h2>
            <p className="legal-page__text">{intl.cancellationsContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.liabilityTitle}</h2>
            <p className="legal-page__text">{intl.liabilityContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.intellectualPropertyTitle}</h2>
            <p className="legal-page__text">{intl.intellectualPropertyContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.modificationsTitle}</h2>
            <p className="legal-page__text">{intl.modificationsContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.terminationTitle}</h2>
            <p className="legal-page__text">{intl.terminationContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.applicableLawTitle}</h2>
            <p className="legal-page__text">{intl.applicableLawContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.contactTitle}</h2>
            <p className="legal-page__text">{intl.contactContent}</p>
          </section>
        </div>

        <div className="legal-page__footer">
          <Link to={ROUTES.LANDING} className="legal-page__back-link">{intl.backHome}</Link>
        </div>
      </div>
    </div>
  );
};

