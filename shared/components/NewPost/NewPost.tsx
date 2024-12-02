import styles from "./NewPost.module.scss"

interface NewPostProps {
    title: string
    text: string
    date: string
}

export function NewPost(props: NewPostProps) {
    return (
        <div className={styles.post}>
            <div className={styles.head}>
                <h3>{props.title}</h3>
                <h4>{props.date}</h4>
            </div>
            <p>{props.text}</p>
        </div>
    )
}