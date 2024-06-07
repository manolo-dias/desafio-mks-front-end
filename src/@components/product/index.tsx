"use client";
import { useCart } from "../cart-container/cartContext";
import { BuyIcon } from "./icon";
import styles from "./styles.module.scss";
import React from "react";

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

export default function Product(props: ProductProps) {
  const { addToCart } = useCart();

  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src={props.photo} alt={props.name} />
      </div>
      <div className={styles.productContent}>
        <div>
          <h1>{props.name}</h1>
          <span>R${parseInt(props.price)}</span>
        </div>
        <p>{props.description}</p>
      </div>
      <button onClick={() => addToCart(props.id)}>
        <BuyIcon />
        <span>COMPRAR</span>
      </button>
    </div>
  );
}
