import { useIntl } from 'react-intl';
import { Product } from '../../services/types';
import { useInterestModal } from './hooks/use-interest-modal';

interface InterestModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; quantity: number }) => void;
}

export const InterestModal: React.FC<InterestModalProps> = ({ product, isOpen, onClose, onSubmit }) => {
  const { formatMessage, formatNumber } = useIntl();
  
  const intl = {
    title: (productName: string) => formatMessage({ id: 'interestModal.title' }, { productName }),
    fullName: formatMessage({ id: 'interestModal.fullName' }),
    fullNamePlaceholder: formatMessage({ id: 'interestModal.fullNamePlaceholder' }),
    email: formatMessage({ id: 'interestModal.email' }),
    emailPlaceholder: formatMessage({ id: 'interestModal.emailPlaceholder' }),
    quantity: formatMessage({ id: 'interestModal.quantity' }),
    costSummary: formatMessage({ id: 'interestModal.costSummary' }),
    unitPrice: formatMessage({ id: 'interestModal.unitPrice' }),
    quantityLabel: formatMessage({ id: 'interestModal.quantityLabel' }),
    productSubtotal: formatMessage({ id: 'interestModal.productSubtotal' }),
    sharedShipping: formatMessage({ id: 'interestModal.sharedShipping' }),
    estimatedTotal: formatMessage({ id: 'interestModal.estimatedTotal' }),
    cancel: formatMessage({ id: 'interestModal.cancel' }),
    confirmInterest: formatMessage({ id: 'interestModal.confirmInterest' }),
    usd: formatMessage({ id: 'common.usd' })
  };
  const {
    name,
    email,
    quantity,
    setName,
    setEmail,
    setQuantity,
    costSummary,
    handleSubmit
  } = useInterestModal(product, onSubmit, onClose);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2 className="modal-title">
          {intl.title(product.name)}
        </h2>
        
        <form onSubmit={handleSubmit} className="interest-form">
          <div className="form-group">
            <label htmlFor="name">{intl.fullName}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder={intl.fullNamePlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{intl.email}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={intl.emailPlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">{intl.quantity}</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (isNaN(value) || value < 1) {
                  setQuantity(1);
                } else {
                  setQuantity(value);
                }
              }}
              required
            />
          </div>

          <div className="cost-summary">
            <h3>{intl.costSummary}</h3>
            <div className="cost-item">
              <span>{intl.unitPrice}</span>
              <span>${formatNumber(product.price)} {intl.usd}</span>
            </div>
            <div className="cost-item">
              <span>{intl.quantityLabel}</span>
              <span>{quantity}</span>
            </div>
            <div className="cost-item">
              <span>{intl.productSubtotal}</span>
              <span>${formatNumber(costSummary.subtotal, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {intl.usd}</span>
            </div>
            <div className="cost-item">
              <span>{intl.sharedShipping}</span>
              <span>${formatNumber(costSummary.shippingPerPerson, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {intl.usd}</span>
            </div>
            <div className="cost-item cost-item--total">
              <span>{intl.estimatedTotal}</span>
              <span>${formatNumber(costSummary.totalCost, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {intl.usd}</span>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="button-secondary">
              {intl.cancel}
            </button>
            <button type="submit" className="button-primary">
              {intl.confirmInterest}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

