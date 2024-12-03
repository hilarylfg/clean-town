import styles from "./Question.module.scss"

interface QuestionProps {
    title: string
    text: string
}

export function Question(props: QuestionProps) {
    return (
        <div className={styles.block}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <hr/>
        </div>
    )
}