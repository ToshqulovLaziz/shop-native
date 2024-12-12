import { ReactNode } from "react";

export interface Product {
    rating: ReactNode;
    image: string | undefined;
    id: string;
    name: string;
    price: number;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }