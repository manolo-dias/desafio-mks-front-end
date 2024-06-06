import { CartIcon } from "./icon"
import styles from "./styles.module.scss"
export default function ButtonCart(){
    return(
        <button className={styles.button}>
            <CartIcon/>
            <span>0</span>
        </button>
    )
}
