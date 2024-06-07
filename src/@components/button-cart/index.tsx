'use client'
import React from "react";
import { CartIcon } from "./icon";
import styles from "./styles.module.scss"; 
import { useCart } from "@/@hooks/cartContext";

export default function ButtonCart() {
  const { getCartItems, toggleCartVisibility } = useCart(); 
  const cartItems = getCartItems();

  return (
    <button 
      className={styles.button}
      onClick={toggleCartVisibility}
    >
      <CartIcon />
      {/* <span>{cartLength}</span> */}
      <span>{cartItems?.length ?? 0}</span>
    </button>
  );
}
