import { ReactNode } from "react";
import styles from "./styles.module.scss"; 
import RemoveItemButton from "./remove-item-button";
import QuantityButton from "./quantity-button";
import { BRL } from "@/utils/price-format";
import { useCart } from "@/@hooks/cartContext";

export default function CartItem({ itemId }: { itemId: number }) {
  const { getItem, removeFromCart } = useCart()
  const cart = getItem(itemId)
  if (!cart) return null
  const sumValue = Number(cart.product.price) * Number(cart.amount)
  return (
    <div className={styles.cartItem}>
      <RemoveItemButton onClick={() => removeFromCart(itemId)}  />

      <img src={cart.product.photo} alt={cart.product.name} />
      <div className={styles.cartItemName}>
      <h1>{cart.product.name}</h1>
        </div>
        <div className={styles.amount}>
        <QuantityButton itemId={itemId} />
      </div>
      <div className={styles.price}>
        <span> 
          R${BRL(sumValue)}
        </span>
      </div> 

    </div>
  )
}