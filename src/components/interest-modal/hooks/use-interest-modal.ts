import { useState, FormEvent, useMemo } from 'react';
import { Product } from '../../../services/types';
import { calculateShippingPerPerson, calculateTotalPerPerson } from '../../../utils/calculations';

interface InterestFormData {
  name: string;
  email: string;
  quantity: number;
}

interface CostSummary {
  shippingPerPerson: number;
  totalCost: number;
  subtotal: number;
}

export const useInterestModal = (product: Product, onSubmit: (data: InterestFormData) => void, onClose: () => void) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);

  const costSummary = useMemo<CostSummary>(() => {
    const shippingPerPerson = calculateShippingPerPerson(
      product.shippingCost,
      product.currentParticipants + 1
    );
    const subtotal = product.price * quantity;
    const totalCost = calculateTotalPerPerson(product.price, shippingPerPerson, quantity);

    return {
      shippingPerPerson,
      subtotal,
      totalCost
    };
  }, [product, quantity]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, quantity });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setQuantity(1);
  };

  return {
    name,
    email,
    quantity,
    setName,
    setEmail,
    setQuantity,
    costSummary,
    handleSubmit
  };
};

