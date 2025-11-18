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
  createdAt: string;
  updatedAt: string;
}

export interface Interest {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userEmail: string;
  quantity: number;
  createdAt: string;
}

