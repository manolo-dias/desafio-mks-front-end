'use client'
import ButtonCart from "../button-cart"
import styles from "./styles.module.scss"
export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <h1>MKS</h1>
                <h2>Sistemas</h2>
            </div>
            <ButtonCart/>
        </nav>
    )
}