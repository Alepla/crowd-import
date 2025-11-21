import { useIntl } from 'react-intl';
import { Loader, Layout, Button } from '../../components';
import { useDashboard } from './hooks/use-dashboard';
import { StatCard, TableProduct, ProgressBar, StatusBadge, STATUS_BADGE_VARIANT } from './components';

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
    return <Loader message={intl.loading} />;
  }

  const hasReadyProducts = readyProducts.length > 0;
  const hasActiveProducts = activeProducts.length > 0;

  return (
    <Layout
      className="dashboard"
      title={intl.title}
    >
      <div className="dashboard__stats">
          <StatCard
            value={stats.readyCount}
            label={intl.readyToImport}
          />
          <StatCard
            value={stats.activeCount}
            label={intl.inProcess}
          />
          <StatCard
            value={stats.totalParticipants}
            label={intl.totalParticipants}
          />
        </div>

        {hasReadyProducts && (
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
                        <TableProduct
                          imageUrl={product.imageUrl}
                          name={product.name}
                        />
                      </td>
                      <td>{product.currentParticipants}</td>
                      <td>
                        ${formatNumber(product.shippingPerPerson, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {intl.usd}
                      </td>
                      <td>
                        <Button className="button-action">{intl.proceedWithImport}</Button>
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
          {!hasActiveProducts ? (
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
                          <TableProduct
                            imageUrl={product.imageUrl}
                            name={product.name}
                          />
                        </td>
                        <td>
                          <ProgressBar
                            current={product.currentParticipants}
                            minimum={product.minimumParticipants}
                            progress={progress}
                          />
                        </td>
                        <td>{product.currentParticipants}</td>
                        <td>
                          <StatusBadge
                            label={intl.inProcessStatus}
                            variant={STATUS_BADGE_VARIANT.ACTIVE}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
    </Layout>
  );
};
