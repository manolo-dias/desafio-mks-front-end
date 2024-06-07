"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextProps {
  cartItems: number[];
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  toggleCartVisibility: () => void;
  isCartVisible: boolean;
  getCartItems: () => number[];
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (itemId: number) => {
    setCartItems((prevItems) => [...prevItems, itemId]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== itemId));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const getCartItems = () => {
    return [...cartItems]; 
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, toggleCartVisibility, isCartVisible, getCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
