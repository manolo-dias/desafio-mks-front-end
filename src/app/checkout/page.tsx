"use client"
import Product from "@/@components/product";
import styles from "./styles.module.scss"
import MainContainer from "@/@components/main-container";
import { CartContainer } from "@/@components/cart-container";
import { useProductsApi } from "@/@hooks/use-products-api";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/@hooks/cartContext";

export default function Home() {
  const {  } = useCart()

  return ( 
    <MainContainer>
      <CartContainer />
      <div className={styles.productGrid}>
        {data.products.map((product) => (
          <AnimatePresence initial={false} key={product.id}>
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Product {...product} />
            </motion.div>
          </AnimatePresence> 
        ))}
      </div>
    </MainContainer> 
  );
}
