import { useState } from 'react';
import { useIntl } from 'react-intl';
import { SortOption, GroupByOption } from '../../hooks';

interface ProductFiltersProps {
  searchQuery: string;
  sortBy: SortOption;
  groupBy: GroupByOption;
  categoryFilter: string;
  statusFilter: string;
  categories: string[];
  onSearchChange: (query: string) => void;
  onSortChange: (sortBy: SortOption) => void;
  onGroupByChange: (groupBy: GroupByOption) => void;
  onCategoryFilterChange: (category: string) => void;
  onStatusFilterChange: (status: string) => void;
  onReset: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchQuery,
  sortBy,
  groupBy,
  categoryFilter,
  statusFilter,
  categories,
  onSearchChange,
  onSortChange,
  onGroupByChange,
  onCategoryFilterChange,
  onStatusFilterChange,
  onReset
}) => {
  const { formatMessage } = useIntl();
  const [isExpanded, setIsExpanded] = useState(false);

  const intl = {
    searchPlaceholder: formatMessage({ id: 'filters.searchPlaceholder' }),
    sortBy: formatMessage({ id: 'filters.sortBy' }),
    sortNone: formatMessage({ id: 'filters.sortNone' }),
    sortPriceAsc: formatMessage({ id: 'filters.sortPriceAsc' }),
    sortPriceDesc: formatMessage({ id: 'filters.sortPriceDesc' }),
    sortNameAsc: formatMessage({ id: 'filters.sortNameAsc' }),
    sortNameDesc: formatMessage({ id: 'filters.sortNameDesc' }),
    sortParticipantsAsc: formatMessage({ id: 'filters.sortParticipantsAsc' }),
    sortParticipantsDesc: formatMessage({ id: 'filters.sortParticipantsDesc' }),
    groupBy: formatMessage({ id: 'filters.groupBy' }),
    groupNone: formatMessage({ id: 'filters.groupNone' }),
    groupCategory: formatMessage({ id: 'filters.groupCategory' }),
    groupStatus: formatMessage({ id: 'filters.groupStatus' }),
    filterByCategory: formatMessage({ id: 'filters.filterByCategory' }),
    filterByStatus: formatMessage({ id: 'filters.filterByStatus' }),
    allCategories: formatMessage({ id: 'filters.allCategories' }),
    allStatuses: formatMessage({ id: 'filters.allStatuses' }),
    resetFilters: formatMessage({ id: 'filters.resetFilters' }),
    statusActive: formatMessage({ id: 'filters.statusActive' }),
    statusPending: formatMessage({ id: 'filters.statusPending' }),
    statusCompleted: formatMessage({ id: 'filters.statusCompleted' }),
    statusCancelled: formatMessage({ id: 'filters.statusCancelled' })
  };

  const hasActiveFilters = searchQuery || sortBy !== 'none' || groupBy !== 'none' || categoryFilter || statusFilter;

  const intlFilters = {
    showFilters: formatMessage({ id: 'filters.showFilters' }),
    hideFilters: formatMessage({ id: 'filters.hideFilters' })
  };

  return (
    <div className="product-filters">
      <div className="product-filters__header">
        <div className="product-filters__search">
          <input
            type="text"
            className="product-filters__search-input"
            placeholder={intl.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="product-filters__header-actions">
          {hasActiveFilters && (
            <button
              className="product-filters__reset"
              onClick={onReset}
              type="button"
            >
              {intl.resetFilters}
            </button>
          )}
          
          <button
            className="product-filters__toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? intlFilters.hideFilters : intlFilters.showFilters}</span>
            <svg
              className={`product-filters__toggle-icon ${isExpanded ? 'product-filters__toggle-icon--expanded' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="product-filters__content">
          <div className="product-filters__row">
            <div className="product-filters__field">
              <label className="product-filters__label">{intl.sortBy}</label>
              <select
                className="product-filters__select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
              >
                <option value="none">{intl.sortNone}</option>
                <option value="price-asc">{intl.sortPriceAsc}</option>
                <option value="price-desc">{intl.sortPriceDesc}</option>
                <option value="name-asc">{intl.sortNameAsc}</option>
                <option value="name-desc">{intl.sortNameDesc}</option>
                <option value="participants-asc">{intl.sortParticipantsAsc}</option>
                <option value="participants-desc">{intl.sortParticipantsDesc}</option>
              </select>
            </div>

            <div className="product-filters__field">
              <label className="product-filters__label">{intl.groupBy}</label>
              <select
                className="product-filters__select"
                value={groupBy}
                onChange={(e) => onGroupByChange(e.target.value as GroupByOption)}
              >
                <option value="none">{intl.groupNone}</option>
                <option value="category">{intl.groupCategory}</option>
                <option value="status">{intl.groupStatus}</option>
              </select>
            </div>

            <div className="product-filters__field">
              <label className="product-filters__label">{intl.filterByCategory}</label>
              <select
                className="product-filters__select"
                value={categoryFilter}
                onChange={(e) => onCategoryFilterChange(e.target.value)}
              >
                <option value="">{intl.allCategories}</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-filters__field">
              <label className="product-filters__label">{intl.filterByStatus}</label>
              <select
                className="product-filters__select"
                value={statusFilter}
                onChange={(e) => onStatusFilterChange(e.target.value)}
              >
                <option value="">{intl.allStatuses}</option>
                <option value="active">{intl.statusActive}</option>
                <option value="pending">{intl.statusPending}</option>
                <option value="completed">{intl.statusCompleted}</option>
                <option value="cancelled">{intl.statusCancelled}</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

