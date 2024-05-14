import { Coffee } from "phosphor-react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface CartItem extends Coffee {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}
