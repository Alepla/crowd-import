import { useIntl } from 'react-intl';
import { useDashboard } from './hooks/use-dashboard';

export const Dashboard: React.FC = () => {
  const { formatMessage, formatNumber } = useIntl();
  
  const intl = {
    title: formatMessage({ id: 'dashboard.title' }),
    loading: formatMessage({ id: 'dashboard.loading' }),
    readyToImport: formatMessage({ id: 'dashboard.readyToImport' }),
    inProcess: formatMessage({ id: 'dashboard.inProcess' }),
    totalParticipants: formatMessage({ id: 'dashboard.totalParticipants' }),
    readyProductsTitle: formatMessage({ id: 'dashboard.readyProductsTitle' }),
    inProcessProductsTitle: formatMessage({ id: 'dashboard.inProcessProductsTitle' }),
    product: formatMessage({ id: 'dashboard.product' }),
    participants: formatMessage({ id: 'dashboard.participants' }),
    shippingCostPerPerson: formatMessage({ id: 'dashboard.shippingCostPerPerson' }),
    action: formatMessage({ id: 'dashboard.action' }),
    progress: formatMessage({ id: 'dashboard.progress' }),
    status: formatMessage({ id: 'dashboard.status' }),
    proceedWithImport: formatMessage({ id: 'dashboard.proceedWithImport' }),
    inProcessStatus: formatMessage({ id: 'dashboard.inProcessStatus' }),
    noProductsInProcess: formatMessage({ id: 'dashboard.noProductsInProcess' }),
    usd: formatMessage({ id: 'common.usd' })
  };
  const {
    loading,
    readyProducts,
    activeProducts,
    stats,
    calculateProgress
  } = useDashboard();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{intl.loading}</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__title">{intl.title}</h1>

        <div className="dashboard__stats">
          <div className="stat-card">
            <div className="stat-card__value">{stats.readyCount}</div>
            <div className="stat-card__label">{intl.readyToImport}</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">{stats.activeCount}</div>
            <div className="stat-card__label">{intl.inProcess}</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">{stats.totalParticipants}</div>
            <div className="stat-card__label">{intl.totalParticipants}</div>
          </div>
        </div>

        {readyProducts.length > 0 && (
          <section className="dashboard__section">
            <h2 className="dashboard__section-title">{intl.readyProductsTitle}</h2>
            <div className="dashboard__table-container">
              <table className="dashboard__table">
                <thead>
                  <tr>
                    <th>{intl.product}</th>
                    <th>{intl.participants}</th>
                    <th>{intl.shippingCostPerPerson}</th>
                    <th>{intl.action}</th>
                  </tr>
                </thead>
                <tbody>
                  {readyProducts.map(product => (
                    <tr key={product.id}>
                      <td>
                        <div className="table-product">
                          <img src={product.imageUrl} alt={product.name} />
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td>{product.currentParticipants}</td>
                      <td>
                        ${formatNumber(product.shippingPerPerson, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {intl.usd}
                      </td>
                      <td>
                        <button className="button-action">{intl.proceedWithImport}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className="dashboard__section">
          <h2 className="dashboard__section-title">{intl.inProcessProductsTitle}</h2>
          {activeProducts.length === 0 ? (
            <p className="dashboard__empty">{intl.noProductsInProcess}</p>
          ) : (
            <div className="dashboard__table-container">
              <table className="dashboard__table">
                <thead>
                  <tr>
                    <th>{intl.product}</th>
                    <th>{intl.progress}</th>
                    <th>{intl.participants}</th>
                    <th>{intl.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {activeProducts.map(product => {
                    const progress = calculateProgress(product);
                    return (
                      <tr key={product.id}>
                        <td>
                          <div className="table-product">
                            <img src={product.imageUrl} alt={product.name} />
                            <span>{product.name}</span>
                          </div>
                        </td>
                        <td>
                          <div className="progress-bar">
                            <div 
                              className="progress-bar__fill"
                              style={{ width: `${progress}%` }}
                            />
                            <span className="progress-bar__text">
                              {product.currentParticipants}/{product.minimumParticipants}
                            </span>
                          </div>
                        </td>
                        <td>{product.currentParticipants}</td>
                        <td>
                          <span className="status-badge status-badge--active">
                            {intl.inProcessStatus}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
