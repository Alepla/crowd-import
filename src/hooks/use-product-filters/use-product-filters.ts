import { useState, useMemo } from 'react';
import { Product } from '../../services/models';

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'participants-asc' | 'participants-desc' | 'none';
export type GroupByOption = 'category' | 'status' | 'none';

export interface FilterState {
  searchQuery: string;
  sortBy: SortOption;
  groupBy: GroupByOption;
  categoryFilter: string;
  statusFilter: string;
}

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    sortBy: 'none',
    groupBy: 'none',
    categoryFilter: '',
    statusFilter: ''
  });

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return uniqueCategories.sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    if (filters.categoryFilter) {
      result = result.filter(product => product.category === filters.categoryFilter);
    }

    if (filters.statusFilter) {
      result = result.filter(product => product.status === filters.statusFilter);
    }

    if (filters.sortBy !== 'none') {
      result.sort((a, b) => {
        switch (filters.sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          case 'participants-asc':
            return a.currentParticipants - b.currentParticipants;
          case 'participants-desc':
            return b.currentParticipants - a.currentParticipants;
          default:
            return 0;
        }
      });
    }

    return result;
  }, [products, filters]);

  const groupedProducts = useMemo(() => {
    if (filters.groupBy === 'none') {
      return { '': filteredProducts };
    }

    const groups: Record<string, Product[]> = {};

    filteredProducts.forEach(product => {
      let key = '';
      if (filters.groupBy === 'category') {
        key = product.category;
      } else if (filters.groupBy === 'status') {
        key = product.status;
      }

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(product);
    });

    const sortedKeys = Object.keys(groups).sort();
    const sortedGroups: Record<string, Product[]> = {};
    sortedKeys.forEach(key => {
      sortedGroups[key] = groups[key];
    });

    return sortedGroups;
  }, [filteredProducts, filters.groupBy]);

  const updateSearchQuery = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const updateSortBy = (sortBy: SortOption) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  const updateGroupBy = (groupBy: GroupByOption) => {
    setFilters(prev => ({ ...prev, groupBy }));
  };

  const updateCategoryFilter = (category: string) => {
    setFilters(prev => ({ ...prev, categoryFilter: category }));
  };

  const updateStatusFilter = (status: string) => {
    setFilters(prev => ({ ...prev, statusFilter: status }));
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      sortBy: 'none',
      groupBy: 'none',
      categoryFilter: '',
      statusFilter: ''
    });
  };

  return {
    filters,
    categories,
    filteredProducts,
    groupedProducts,
    updateSearchQuery,
    updateSortBy,
    updateGroupBy,
    updateCategoryFilter,
    updateStatusFilter,
    resetFilters
  };
};

