import { Product } from '../services/types';

export const calculateShippingPerPerson = (
  totalShipping: number,
  participants: number
): number => {
  if (participants === 0) return 0;
  return Math.round((totalShipping / participants) * 100) / 100;
};

export const calculateTotalPerPerson = (
  productPrice: number,
  shippingPerPerson: number,
  quantity: number = 1
): number => {
  return (productPrice * quantity) + shippingPerPerson;
};

export const hasReachedMinimum = (product: Product): boolean => {
  return product.currentParticipants >= product.minimumParticipants;
};

export const participantsNeeded = (product: Product): number => {
  return Math.max(0, product.minimumParticipants - product.currentParticipants);
};

