import React from "react";
import styles from "./styles.module.scss";
import { useCart } from "./cartContext";
import Drawer from "../drawer";
import CartItem from "../cart-item"; 
import { BRL } from "@/utils/price-format";
 

export default function TotalPriceCard() {
  const {   getFinalPrice } = useCart();
  const finalPrice = getFinalPrice()
  return (
    <div className={styles.totalPriceCard}>
      <div className={styles.totalPrice}>
        <span>Total</span>
        <span>R${BRL(finalPrice)}</span>
      </div>
       
    </div>
  )
}