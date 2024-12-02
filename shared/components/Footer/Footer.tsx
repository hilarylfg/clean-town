import styles from './Footer.module.scss'
import {Logo} from "@/shared/components";

export function Footer() {
    return (
        <div className={styles.wrap}>
            <footer>
                <div className={`${styles.description} container`}>
                    <Logo/>
                </div>
            </footer>
        </div>
    )
}