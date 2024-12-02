import styles from './Logo.module.scss'
import Link from "next/link";

export function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="/">Clean<i>Town</i></Link>
        </div>
    )
}