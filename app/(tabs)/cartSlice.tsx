// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from './types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state: { items: { product: any; quantity: number; }[]; }, action: PayloadAction<Product>) {
      const existingProduct = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart(state: { items: any[]; }, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
    },
    updateQuantity(state: { items: any[]; }, action: PayloadAction<{ id: string; quantity: number }>) {
      const existingProduct = state.items.find((item) => item.product.id === action.payload.id);
      if (existingProduct && action.payload.quantity > 0) {
        existingProduct.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
