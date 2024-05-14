export interface ItemProps {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
  quantity: number;
}

export interface CartState {
  cart: ItemProps[];
  addToCart: (item: ItemProps) => void;
  removeFromCart: (itemId: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}
