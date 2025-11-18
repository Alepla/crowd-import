import { useMemo } from 'react';
import { Product } from '../../../services/types';
import { useProducts } from '../../../hooks/use-products';
import { calculateShippingPerPerson, hasReachedMinimum } from '../../../utils/calculations';

interface DashboardStats {
  readyCount: number;
  activeCount: number;
  totalParticipants: number;
}

interface ProductWithShipping extends Product {
  shippingPerPerson: number;
}

export const useDashboard = () => {
  const { products, loading } = useProducts();

  const readyProducts = useMemo<ProductWithShipping[]>(() => {
    return products
      .filter(p => hasReachedMinimum(p))
      .map(product => ({
        ...product,
        shippingPerPerson: calculateShippingPerPerson(
          product.shippingCost,
          product.currentParticipants
        )
      }));
  }, [products]);

  const activeProducts = useMemo(() => {
    return products.filter(p => p.status === 'active' && !hasReachedMinimum(p));
  }, [products]);

  const stats = useMemo<DashboardStats>(() => {
    return {
      readyCount: readyProducts.length,
      activeCount: activeProducts.length,
      totalParticipants: products.reduce((sum, p) => sum + p.currentParticipants, 0)
    };
  }, [readyProducts.length, activeProducts.length, products]);

  const calculateProgress = (product: Product): number => {
    return (product.currentParticipants / product.minimumParticipants) * 100;
  };

  return {
    loading,
    readyProducts,
    activeProducts,
    stats,
    calculateProgress
  };
};

