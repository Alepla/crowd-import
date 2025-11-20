import { useIntl } from 'react-intl';
import { ProductCard, InterestModal, ProductFilters } from '../../components';
import { useHome } from './hooks/use-home';

export const Home: React.FC = () => {
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

  const getGroupTitle = (groupKey: string) => {
    if (filters.groupBy === 'category') {
      return groupKey;
    }
    if (filters.groupBy === 'status') {
      const statusMap: Record<string, string> = {
        active: intl.statusActive,
        pending: intl.statusPending,
        completed: intl.statusCompleted,
        cancelled: intl.statusCancelled
      };
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
  } = useHome();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{intl.loading}</p>
      </div>
    );
  }

  const renderProducts = (productsToRender: typeof filteredProducts) => {
    if (productsToRender.length === 0) {
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

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <h1 className="home__title">{intl.title}</h1>
          <p className="home__subtitle">
            {intl.subtitle}
          </p>
        </div>

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

        {filters.groupBy === 'none' ? (
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
      </div>
    </div>
  );
};
