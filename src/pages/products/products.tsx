import { useIntl } from 'react-intl';
import { InterestModal, Loader, Layout } from '../../components';
import { ProductCard, ProductFilters } from './components';
import { useProductsPage } from './hooks/use-products-page';
import { PRODUCT_STATUS } from '../../services/models';
import { GROUP_BY_OPTIONS } from '../../hooks';

export const Products: React.FC = () => {
  const { formatMessage } = useIntl();
  
  const intl = {
    title: formatMessage({ id: 'home.title' }),
    subtitle: formatMessage({ id: 'home.subtitle' }),
    loading: formatMessage({ id: 'home.loading' }),
    empty: formatMessage({ id: 'home.empty' }),
    groupCategory: formatMessage({ id: 'filters.groupCategory' }),
    groupStatus: formatMessage({ id: 'filters.groupStatus' }),
    statusActive: formatMessage({ id: 'filters.statusActive' }),
    statusPending: formatMessage({ id: 'filters.statusPending' }),
    statusCompleted: formatMessage({ id: 'filters.statusCompleted' }),
    statusCancelled: formatMessage({ id: 'filters.statusCancelled' })
  };

  const statusMap: Record<string, string> = {
    [PRODUCT_STATUS.ACTIVE]: intl.statusActive,
    [PRODUCT_STATUS.PENDING]: intl.statusPending,
    [PRODUCT_STATUS.COMPLETED]: intl.statusCompleted,
    [PRODUCT_STATUS.CANCELLED]: intl.statusCancelled
  };

  const getGroupTitle = (groupKey: string) => {
    if (filters.groupBy === GROUP_BY_OPTIONS.CATEGORY) {
      return groupKey;
    }
    if (filters.groupBy === GROUP_BY_OPTIONS.STATUS) {
      return `${intl.groupStatus}: ${statusMap[groupKey] || groupKey}`;
    }
    return groupKey;
  };
  
  const {
    loading,
    selectedProduct,
    isModalOpen,
    filters,
    categories,
    filteredProducts,
    groupedProducts,
    handleShowInterest,
    handleCloseModal,
    handleSubmitInterest,
    updateSearchQuery,
    updateSortBy,
    updateGroupBy,
    updateCategoryFilter,
    updateStatusFilter,
    resetFilters
  } = useProductsPage();

  if (loading) {
    return <Loader message={intl.loading} />;
  }

  const renderProducts = (productsToRender: typeof filteredProducts) => {
    const isEmpty = productsToRender.length === 0;

    if (isEmpty) {
      return (
        <div className="empty-state">
          <p>{intl.empty}</p>
        </div>
      );
    }

    return (
      <div className="products-grid">
        {productsToRender.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onShowInterest={handleShowInterest}
          />
        ))}
      </div>
    );
  };

  const isGrouped = filters.groupBy !== GROUP_BY_OPTIONS.NONE;

  return (
    <Layout
      className="products"
      title={intl.title}
      subtitle={intl.subtitle}
    >
      <ProductFilters
          searchQuery={filters.searchQuery}
          sortBy={filters.sortBy}
          groupBy={filters.groupBy}
          categoryFilter={filters.categoryFilter}
          statusFilter={filters.statusFilter}
          categories={categories}
          onSearchChange={updateSearchQuery}
          onSortChange={updateSortBy}
          onGroupByChange={updateGroupBy}
          onCategoryFilterChange={updateCategoryFilter}
          onStatusFilterChange={updateStatusFilter}
          onReset={resetFilters}
        />

        {!isGrouped ? (
          renderProducts(filteredProducts)
        ) : (
          <div className="products-grouped">
            {Object.entries(groupedProducts).map(([groupKey, products]) => (
              <div key={groupKey} className="products-group">
                <h2 className="products-group__title">
                  {getGroupTitle(groupKey)}
                  <span className="products-group__count">({products.length})</span>
                </h2>
                {renderProducts(products)}
              </div>
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
    </Layout>
  );
};

