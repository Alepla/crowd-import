export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  shippingCost: number;
  minimumParticipants: number;
  currentParticipants: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  category: string;
  createdAt: string;
  updatedAt: string;
}

