import { useState } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { SortOption, GroupByOption, SORT_OPTIONS, GROUP_BY_OPTIONS } from '../../../../hooks';
import { PRODUCT_STATUS } from '../../../../services/models';
import { SelectField } from '../../../../components/select-field';
import { IconButton } from '../../../../components/icon-button';
import { Button } from '../../../../components/button';

const renderToggleIcon = (isExpanded: boolean) => (
  <svg
    className={classNames('product-filters__toggle-icon', {
      'product-filters__toggle-icon--expanded': isExpanded
    })}
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
);

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

  const hasActiveFilters = searchQuery || sortBy !== SORT_OPTIONS.NONE || groupBy !== GROUP_BY_OPTIONS.NONE || categoryFilter || statusFilter;

  const toggleButtonLabel = isExpanded 
    ? formatMessage({ id: 'filters.hideFilters' })
    : formatMessage({ id: 'filters.showFilters' });

  const sortOptions = [
    { value: SORT_OPTIONS.NONE, label: intl.sortNone },
    { value: SORT_OPTIONS.PRICE_ASC, label: intl.sortPriceAsc },
    { value: SORT_OPTIONS.PRICE_DESC, label: intl.sortPriceDesc },
    { value: SORT_OPTIONS.NAME_ASC, label: intl.sortNameAsc },
    { value: SORT_OPTIONS.NAME_DESC, label: intl.sortNameDesc },
    { value: SORT_OPTIONS.PARTICIPANTS_ASC, label: intl.sortParticipantsAsc },
    { value: SORT_OPTIONS.PARTICIPANTS_DESC, label: intl.sortParticipantsDesc }
  ];

  const groupByOptions = [
    { value: GROUP_BY_OPTIONS.NONE, label: intl.groupNone },
    { value: GROUP_BY_OPTIONS.CATEGORY, label: intl.groupCategory },
    { value: GROUP_BY_OPTIONS.STATUS, label: intl.groupStatus }
  ];

  const categoryOptions = [
    { value: '', label: intl.allCategories },
    ...categories.map(category => ({ value: category, label: category }))
  ];

  const statusOptions = [
    { value: '', label: intl.allStatuses },
    { value: PRODUCT_STATUS.ACTIVE, label: intl.statusActive },
    { value: PRODUCT_STATUS.PENDING, label: intl.statusPending },
    { value: PRODUCT_STATUS.COMPLETED, label: intl.statusCompleted },
    { value: PRODUCT_STATUS.CANCELLED, label: intl.statusCancelled }
  ];

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
            <Button
              className="product-filters__reset"
              onClick={onReset}
            >
              {intl.resetFilters}
            </Button>
          )}
          
          <IconButton
            icon={renderToggleIcon(isExpanded)}
            onClick={() => setIsExpanded(!isExpanded)}
            className="product-filters__toggle"
            ariaLabel={toggleButtonLabel}
            title={toggleButtonLabel}
            ariaExpanded={isExpanded}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="product-filters__content">
          <div className="product-filters__row">
            <SelectField
              classNamePrefix="product-filters"
              label={intl.sortBy}
              value={sortBy}
              onChange={(value) => onSortChange(value as SortOption)}
              options={sortOptions}
            />

            <SelectField
              classNamePrefix="product-filters"
              label={intl.groupBy}
              value={groupBy}
              onChange={(value) => onGroupByChange(value as GroupByOption)}
              options={groupByOptions}
            />

            <SelectField
              classNamePrefix="product-filters"
              label={intl.filterByCategory}
              value={categoryFilter}
              onChange={onCategoryFilterChange}
              options={categoryOptions}
            />

            <SelectField
              classNamePrefix="product-filters"
              label={intl.filterByStatus}
              value={statusFilter}
              onChange={onStatusFilterChange}
              options={statusOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
};

