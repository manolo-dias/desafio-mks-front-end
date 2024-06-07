"use client";
import { ProductDto } from "@/@service/dto/product";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem  {
  product: ProductDto
  amount: number
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: ProductDto) => void;
  incrementItem: (itemId: number) => void;
  decrementItem: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  toggleCartVisibility: () => void;
  isCartVisible: boolean;
  getCartItems: () => CartItem[]; 
  getItem: (itemId: number) => CartItem | undefined;
  changeItemAmount: (itemId: number, amount: number) => void;
  getFinalPrice: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const alreadyExistItemOnCart = (itemId: number) => {
    return cartItems.some((item) => item.product.id === itemId);
  }

  const addToCart = (product: ProductDto) => {
    if (alreadyExistItemOnCart(product.id)) {
      incrementItem(product.id);
      return;
    }

    setCartItems((prevItems) => [...prevItems, {
      product,
      amount: 1
    }]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== itemId));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const incrementItem = (itemId: number) => {
    if (!alreadyExistItemOnCart(itemId)) return;

    setCartItems((prevItems) => prevItems.map((cartItem) => {
      if (cartItem.product.id === itemId) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    }));
  }

  const getProductAmount = (itemId: number) => {
    const item = cartItems.find((item) => item.product.id === itemId);
    return item ? item.amount : 0;
  }

  const decrementItem = (itemId: number) => {
    if (!alreadyExistItemOnCart(itemId)) return; 
    const productAmount = getProductAmount(itemId);
    if (productAmount <= 1) return removeFromCart(itemId);

    setCartItems((prevItems) => prevItems.map((cartItem) => {
      if (cartItem.product.id === itemId) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    }));
  }

  const getItem = (itemId: number) => {
    const item = cartItems.find((item) => item.product.id === itemId);
    return item 
  }

  const changeItemAmount = (itemId: number, amount: number) => {
    if (!alreadyExistItemOnCart(itemId)) return;
    if (amount <= 0) return removeFromCart(itemId);
    setCartItems((prevItems) => prevItems.map((cartItem) => {
      if (cartItem.product.id === itemId) {
        return { ...cartItem, amount };
      }
      return cartItem;
    }));
  }

  const getFinalPrice = () => {
    return cartItems.reduce((acc, item) => {
      return acc + item.amount * Number(item.product.price);
    }, 0);
  }

  const getCartItems = () => {
    return [...cartItems]; 
  };

  return (
    <CartContext.Provider value={{ getFinalPrice, changeItemAmount, getItem, cartItems, addToCart, removeFromCart, toggleCartVisibility, isCartVisible, getCartItems, decrementItem, incrementItem }}>
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
