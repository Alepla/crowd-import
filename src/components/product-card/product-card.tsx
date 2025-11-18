import { useIntl } from 'react-intl';
import { Product } from '../../services/types';
import { calculateShippingPerPerson, hasReachedMinimum, participantsNeeded } from '../../utils/calculations';

interface ProductCardProps {
  product: Product;
  onShowInterest: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onShowInterest }) => {
  const { formatMessage, formatNumber } = useIntl();
  
  const intl = {
    readyToImport: formatMessage({ id: 'productCard.readyToImport' }),
    unitPrice: formatMessage({ id: 'productCard.unitPrice' }),
    sharedShipping: formatMessage({ id: 'productCard.sharedShipping' }),
    participants: formatMessage({ id: 'productCard.participants' }),
    needed: (count: number) => formatMessage({ id: 'productCard.needed' }, { count }),
    showInterest: formatMessage({ id: 'productCard.showInterest' }),
    importConfirmed: formatMessage({ id: 'productCard.importConfirmed' }),
    usd: formatMessage({ id: 'common.usd' })
  };
  const shippingPerPerson = calculateShippingPerPerson(
    product.shippingCost,
    product.currentParticipants || 1
  );
  const reachedMinimum = hasReachedMinimum(product);
  const needed = participantsNeeded(product);

  let cardClassName = 'product-card';
  if (reachedMinimum) {
    cardClassName += ' product-card--ready';
  }

  let buttonText = intl.showInterest;
  if (reachedMinimum) {
    buttonText = intl.importConfirmed;
  }

  return (
    <div className={cardClassName}>
      <div className="product-card__image">
        <img src={product.imageUrl} alt={product.name} />
        {reachedMinimum && (
          <span className="product-card__badge">{intl.readyToImport}</span>
        )}
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        
        <div className="product-card__pricing">
          <div className="product-card__price">
            <span className="product-card__price-label">{intl.unitPrice}</span>
            <span className="product-card__price-value">
              ${formatNumber(product.price)} {intl.usd}
            </span>
          </div>
          <div className="product-card__shipping">
            <span className="product-card__shipping-label">{intl.sharedShipping}</span>
            <span className="product-card__shipping-value">
              ${formatNumber(shippingPerPerson, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {intl.usd}
            </span>
          </div>
        </div>

        <div className="product-card__participants">
          <div className="product-card__progress">
            <div className="product-card__progress-bar">
              <div 
                className="product-card__progress-fill"
                style={{ 
                  width: `${(product.currentParticipants / product.minimumParticipants) * 100}%` 
                }}
              />
            </div>
            <div className="product-card__progress-text">
              {product.currentParticipants} / {product.minimumParticipants} {intl.participants}
            </div>
          </div>
          
          {!reachedMinimum && (
            <p className="product-card__needed">
              {intl.needed(needed)}
            </p>
          )}
        </div>

        <button 
          className="product-card__button"
          onClick={() => onShowInterest(product.id)}
          disabled={reachedMinimum}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

