import React from "react";
import styles from "./styles.module.scss";
import { useCart } from "./cartContext";
import Drawer from "../drawer";
import CartItem from "../cart-item"; 
import TotalPriceCard from "./total-price-card";

export const EmptyCard: React.FC = () => {
   return (
     <div>
        <div className={styles.emptyCart}> 
          <img src="/empty-cart.png" alt="Carrinho vazio" />
          <h2>Seu carrinho está vazio</h2>
          <p>
            Adicione itens ao seu carrinho para ver todos os detalhes.
          </p>
        </div>
      </div>
  );
};

