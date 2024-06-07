
import { useState } from "react"; 
import styles from "./styles.module.scss"; 
import { useCart } from "@/@hooks/cartContext";

export default function QuantityButton ({ itemId } :{ itemId: number}) {
  const { incrementItem, decrementItem, getItem } = useCart()
  const item = getItem(itemId) 
  if (!item) return null
 

  return (
    <div className={styles.quantityButton}>
      <span onClick={() => decrementItem(itemId)}>-</span>
      <div className={styles.slash}>|</div>
      <div className={styles.amount}>
        {item.amount}
      </div>
      <div className={styles.slash}>|</div>
      <span onClick={() => incrementItem(itemId)}>+</span>
    </div>
  )
}