import { useIntl } from 'react-intl';
import { ProductCard } from '../../components/product-card';
import { InterestModal } from '../../components/interest-modal';
import { useHome } from './hooks/use-home';

export const Home: React.FC = () => {
  const { formatMessage } = useIntl();
  
  const intl = {
    title: formatMessage({ id: 'home.title' }),
    subtitle: formatMessage({ id: 'home.subtitle' }),
    loading: formatMessage({ id: 'home.loading' }),
    empty: formatMessage({ id: 'home.empty' })
  };
  const {
    products,
    loading,
    selectedProduct,
    isModalOpen,
    handleShowInterest,
    handleCloseModal,
    handleSubmitInterest
  } = useHome();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{intl.loading}</p>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <h1 className="home__title">{intl.title}</h1>
          <p className="home__subtitle">
            {intl.subtitle}
          </p>
        </div>

        {products.length === 0 ? (
          <div className="empty-state">
            <p>{intl.empty}</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onShowInterest={handleShowInterest}
              />
            ))}
          </div>
        )}

        {selectedProduct && (
          <InterestModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSubmit={handleSubmitInterest}
          />
        )}
      </div>
    </div>
  );
};
