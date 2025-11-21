import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { ROUTES, ICONS } from '../../constants';

interface EmptyPageProps {
  icon?: string;
  title: string;
  description: string;
  showProductsLink?: boolean;
  productsLinkText?: string;
}

export const EmptyPage: React.FC<EmptyPageProps> = ({
  icon = ICONS.PACKAGE,
  title,
  description,
  showProductsLink = true,
  productsLinkText
}) => {
  const { formatMessage } = useIntl();
  
  const intl = {
    defaultProductsLinkText: formatMessage({ id: 'emptyPage.viewProducts' })
  };

  return (
    <div className="empty-page">
      <div className="empty-page__icon">{icon}</div>
      <h2 className="empty-page__title">{title}</h2>
      <p className="empty-page__description">{description}</p>
      {showProductsLink && (
        <Link to={ROUTES.PRODUCTS} className="empty-page__button">
          {productsLinkText || intl.defaultProductsLinkText}
        </Link>
      )}
    </div>
  );
};

