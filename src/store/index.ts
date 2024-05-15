import { create } from "zustand";
import { Address, CartState } from "./types";
import { filter, findIndex, map } from "lodash";

export const useStore = create<CartState>((set) => ({
  cart: [], // inicializa o carrinho como um array vazio

  addToCart: (item) => {
    set((state) => {
      // Utiliza findIndex do lodash para verificar se o item já está no carrinho
      const cartItemIndex = findIndex(
        state.cart,
        (cartItem) => cartItem.id === item.id
      );

      if (cartItemIndex !== -1) {
        // Se o item já existe no carrinho, utiliza map do lodash para atualizar a quantidade
        return {
          cart: map(state.cart, (cartItem, index) => {
            if (index === cartItemIndex) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              };
            }
            return cartItem;
          }),
        };
      } else {
        // Se o item não existe, adiciona ao carrinho com a quantidade recebida
        return { cart: [...state.cart, item] };
      }
    });
  },
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: filter(state.cart, (item) => item.id !== itemId),
    })),

  clearCart: () => set({ cart: [] }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: map(state.cart, (item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    })),
  address: {} as Address,
  setAddress: (address) => set({ address }),
}));
