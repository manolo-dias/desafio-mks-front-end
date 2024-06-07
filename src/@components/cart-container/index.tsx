"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useCart } from "./cartContext";



export const CartContainer: React.FC = () => {
  const { cartItems, toggleCartVisibility, isCartVisible, removeFromCart } = useCart();

  return (
    <div>
      <button onClick={toggleCartVisibility}>Toggle Cart</button>
      {isCartVisible && (
        <div className={styles.cartContainer}>
          <div className={styles.cartTitleBox}>
            <h1>Carrinho <br/>de compras</h1>
          </div>

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

