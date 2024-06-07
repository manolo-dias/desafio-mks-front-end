"use client"
import Product from "@/@components/product";
import styles from "./styles.module.scss"
import MainContainer from "@/@components/main-container";
import { CartContainer } from "@/@components/cart-container";
import { useProductsApi } from "@/@hooks/use-products-api";

export default function Home() {
  const { getProducts } = useProductsApi()
  const { data, error, isLoading } = getProducts({
    page: 1,
    rows: 8,
    orderBy: 'ASC',
    sortBy: 'name'
  });

  if (isLoading) return <div>Loading...</div>
  if (error || !data) return <div>Error...</div>

  return ( 
    <MainContainer>
      <CartContainer />
      <div className={styles.productGrid}>
        {data.products.map((product) => (
          <Product
            {...product}
            key={product.id}
          />
        ))}
      </div>
    </MainContainer> 
  );
}
