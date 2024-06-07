import React, { useCallback } from "react";
import styles from "./styles.module.scss"; 
import Drawer from "../drawer";
import CartItem from "../cart-item"; 
import TotalPriceCard from "./total-price-card";
import { EmptyCard } from "./empty-card";
import { useCart } from "@/@hooks/cartContext";

export const CartContainer: React.FC = () => {
  const { cartItems, toggleCartVisibility, isCartVisible, removeFromCart, getFinalPrice } = useCart();

  const CartItemsList = useCallback(() => {
    return (
      <> 
      <div style={{ padding: 16 }}>
          <div className={styles.cartTitleBox}>
            <h1>Carrinho <br/>de compras</h1>
          </div>  
          <div className={styles.cartListItem}>
            {cartItems.map((cart) => (
              <CartItem itemId={cart.product.id}  key={cart.product.id} />
            ))}
          </div> 
        </div>
        <div> 
          <TotalPriceCard />
          <button className={styles.buttonCheckout} onClick={toggleCartVisibility}>
              Finalizar Compra 
            </button>
        </div>
      </>
    )
  }, [cartItems])

  return (
    <Drawer
      isOpen={isCartVisible}
      onClose={toggleCartVisibility} 
    >     
    <div className={styles.cartListItem} > 
      {cartItems.length === 0 
       ? <EmptyCard />
       : <CartItemsList />
      }
      </div> 
    </Drawer>
  );
};

