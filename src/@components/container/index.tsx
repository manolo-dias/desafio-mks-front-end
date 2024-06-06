import { Children } from "react"
import styles from "./styles.module.scss"
export default function Container(props: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>

    )
}