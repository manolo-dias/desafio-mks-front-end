'use client'
import { CartProvider } from "@/@components/cart-container/cartContext";
import { ReactNode } from "react";

export default function ApplicationProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}