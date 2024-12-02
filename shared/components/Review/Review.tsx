import styles from "./Review.module.scss"

interface ReviewProps {
    title: string
    text: string
}

export function Review(props: ReviewProps) {
    return (
        <div className={styles.block}>
            <p>{props.text}</p>
            <h3>{props.title}</h3>
        </div>
    )
}