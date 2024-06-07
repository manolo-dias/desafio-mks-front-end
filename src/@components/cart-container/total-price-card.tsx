import React from "react";
import styles from "./styles.module.scss"; 
import Drawer from "../drawer";
import CartItem from "../cart-item"; 
import { BRL } from "@/utils/price-format";
import { useCart } from "@/@hooks/cartContext";

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