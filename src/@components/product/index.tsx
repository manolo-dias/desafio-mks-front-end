"use client";
import { ProductDto } from "@/@service/dto/product"; 
import { BuyIcon } from "./icon";
import styles from "./styles.module.scss";
import React from "react";
import { useCart } from "@/@hooks/cartContext";
 
export default function Product(product: ProductDto) {
  const { addToCart, getItem , toggleCartVisibility} = useCart();

  const existItemWithId = getItem(product.id);
  function handleOnClickBuyButton() {
    addToCart(product);
  }

  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src={product.photo} alt={product.name} />
      </div>
      <div className={styles.productContent}>
        <div>
          <h1>{product.name}</h1>
          <span>R${parseInt(product.price)}</span>
        </div>
        <p>{product.description}</p>
      </div>

      {
        existItemWithId ? (
          <button onClick={toggleCartVisibility} >
            <span>VER CARRINHO</span>
          </button>
        ) : (
          <button onClick={handleOnClickBuyButton}>
            <BuyIcon />
            <span>
            COMPRAR
            </span>
          </button>
        )


      }
     
    </div>
  );
}
