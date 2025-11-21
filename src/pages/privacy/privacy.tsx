import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { formatLongDate } from '../../utils';

export const Privacy: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'privacy.title' }),
    lastUpdated: formatMessage({ id: 'privacy.lastUpdated' }),
    introduction: formatMessage({ id: 'privacy.introduction' }),
    dataCollectionTitle: formatMessage({ id: 'privacy.dataCollectionTitle' }),
    dataCollectionContent: formatMessage({ id: 'privacy.dataCollectionContent' }),
    dataUseTitle: formatMessage({ id: 'privacy.dataUseTitle' }),
    dataUseContent: formatMessage({ id: 'privacy.dataUseContent' }),
    dataProtectionTitle: formatMessage({ id: 'privacy.dataProtectionTitle' }),
    dataProtectionContent: formatMessage({ id: 'privacy.dataProtectionContent' }),
    userRightsTitle: formatMessage({ id: 'privacy.userRightsTitle' }),
    userRightsContent: formatMessage({ id: 'privacy.userRightsContent' }),
    cookiesTitle: formatMessage({ id: 'privacy.cookiesTitle' }),
    cookiesContent: formatMessage({ id: 'privacy.cookiesContent' }),
    thirdPartiesTitle: formatMessage({ id: 'privacy.thirdPartiesTitle' }),
    thirdPartiesContent: formatMessage({ id: 'privacy.thirdPartiesContent' }),
    changesTitle: formatMessage({ id: 'privacy.changesTitle' }),
    changesContent: formatMessage({ id: 'privacy.changesContent' }),
    contactTitle: formatMessage({ id: 'privacy.contactTitle' }),
    contactContent: formatMessage({ id: 'privacy.contactContent' }),
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
            <h2 className="legal-page__section-title">{intl.dataCollectionTitle}</h2>
            <p className="legal-page__text">{intl.dataCollectionContent}</p>
            <ul className="legal-page__list">
              <li>{formatMessage({ id: 'privacy.dataCollectionItem1' })}</li>
              <li>{formatMessage({ id: 'privacy.dataCollectionItem2' })}</li>
              <li>{formatMessage({ id: 'privacy.dataCollectionItem3' })}</li>
              <li>{formatMessage({ id: 'privacy.dataCollectionItem4' })}</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.dataUseTitle}</h2>
            <p className="legal-page__text">{intl.dataUseContent}</p>
            <ul className="legal-page__list">
              <li>{formatMessage({ id: 'privacy.dataUseItem1' })}</li>
              <li>{formatMessage({ id: 'privacy.dataUseItem2' })}</li>
              <li>{formatMessage({ id: 'privacy.dataUseItem3' })}</li>
              <li>{formatMessage({ id: 'privacy.dataUseItem4' })}</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.dataProtectionTitle}</h2>
            <p className="legal-page__text">{intl.dataProtectionContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.userRightsTitle}</h2>
            <p className="legal-page__text">{intl.userRightsContent}</p>
            <ul className="legal-page__list">
              <li>{formatMessage({ id: 'privacy.userRightsItem1' })}</li>
              <li>{formatMessage({ id: 'privacy.userRightsItem2' })}</li>
              <li>{formatMessage({ id: 'privacy.userRightsItem3' })}</li>
              <li>{formatMessage({ id: 'privacy.userRightsItem4' })}</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.cookiesTitle}</h2>
            <p className="legal-page__text">{intl.cookiesContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.thirdPartiesTitle}</h2>
            <p className="legal-page__text">{intl.thirdPartiesContent}</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">{intl.changesTitle}</h2>
            <p className="legal-page__text">{intl.changesContent}</p>
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

