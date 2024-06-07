'use client' 
import { CartProvider } from "@/@hooks/cartContext";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

export default function ApplicationProviders({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient() 
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {children}
      </CartProvider>
    </QueryClientProvider>
  )
}