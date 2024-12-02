import styles from "./Service.module.scss"

interface ServiceProps {
    title: string
    text: string
    price: number
}

export function Service(props: ServiceProps) {
    return (
        <div className={styles.block}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div className={styles.price}>
                от
                <p>{props.price.toLocaleString("ru-RU") + " ₽"}</p>
            </div>
        </div>
    )
}