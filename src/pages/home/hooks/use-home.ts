import { useState } from 'react';
import { Product } from '../../../services/types';
import { useProducts } from '../../../hooks/use-products';

export const useHome = () => {
  const { products, loading, addInterest } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowInterest = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSubmitInterest = (_data: { name: string; email: string; quantity: number }) => {
    if (selectedProduct) {
      addInterest(selectedProduct.id);
      handleCloseModal();
    }
  };

  return {
    products,
    loading,
    selectedProduct,
    isModalOpen,
    handleShowInterest,
    handleCloseModal,
    handleSubmitInterest
  };
};

