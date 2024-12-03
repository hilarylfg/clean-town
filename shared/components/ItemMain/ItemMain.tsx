import styles from "./ItemMain.module.scss"

interface ItemMainProps {
    title: string
    text: string
}

export function ItemMain(props: ItemMainProps) {
    return (
        <div className={styles.item}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}