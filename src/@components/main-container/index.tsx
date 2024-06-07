import styles from "./styles.module.scss"



export default function MainContainer(props: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>

    )
}