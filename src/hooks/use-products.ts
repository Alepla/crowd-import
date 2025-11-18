import { useState, useEffect } from 'react';
import { Product } from '../services/types';
import { mockProducts } from '../utils/mock-data';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const addInterest = (productId: string) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId) {
          return { ...product, currentParticipants: product.currentParticipants + 1 };
        }
        return product;
      })
    );
  };

  const removeInterest = (productId: string) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId && product.currentParticipants > 0) {
          return { ...product, currentParticipants: product.currentParticipants - 1 };
        }
        return product;
      })
    );
  };

  return {
    products,
    loading,
    addInterest,
    removeInterest
  };
};

