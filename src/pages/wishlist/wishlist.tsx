import { useIntl } from 'react-intl';
import { ProductCard, EmptyPage } from '../../components';
import { Product } from '../../services/models/product';
import { mockProducts } from '../../utils/mock-data';
import { ICONS } from '../../constants';

export const Wishlist: React.FC = () => {
  const { formatMessage } = useIntl();

  const wishlistItems: Product[] = mockProducts.slice(0, 3);

  const intl = {
    title: formatMessage({ id: 'wishlist.title' }),
    subtitle: formatMessage({ id: 'wishlist.subtitle' }),
    empty: formatMessage({ id: 'wishlist.empty' }),
    emptyDescription: formatMessage({ id: 'wishlist.emptyDescription' })
  };

  return (
    <div className="wishlist-page page-gradient">
      <div className="wishlist-page__container">
        <div className="wishlist-page__header">
          <h1 className="wishlist-page__title">{intl.title}</h1>
          <p className="wishlist-page__subtitle">{intl.subtitle}</p>
        </div>

        {wishlistItems.length === 0 ? (
          <EmptyPage
            icon={ICONS.HEART}
            title={intl.empty}
            description={intl.emptyDescription}
          />
        ) : (
          <div className="wishlist-page__grid">
            {wishlistItems.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onShowInterest={() => {}} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

