"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useCart } from "./cartContext";



const CartContainer: React.FC = () => {
  const { cartItems, toggleCartVisibility, isCartVisible, removeFromCart } = useCart();

  return (
    <div>
      <button onClick={toggleCartVisibility}>Toggle Cart</button>
      {isCartVisible && (
        <div className={styles.cartContainer}>
          <h2>Shopping Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                Item ID: {item}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={toggleCartVisibility}>Close Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
