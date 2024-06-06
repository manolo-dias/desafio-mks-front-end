import { BuyIcon } from "./icon";
import styles from "./styles.module.scss"
type ProductProps = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

export default function Product(props: ProductProps) {
    return (
        <div className={styles.product}>

            <div className={styles.productImage}>
                <img src={props.photo}></img>
            </div>
            <div className={styles.productContent}>
                <div>
                    <h1>{props.name}</h1>
                    <span>R${parseInt(props.price)}</span>

                </div>
                <p>
                    {props.description}
                </p>
            </div>
            <button>
                <BuyIcon />
                <span>COMPRAR</span>
            </button>
        </div>
    )
}