import styles from './Footer.module.scss'
import {Logo} from "@/shared/components";

export function Footer() {
    return (
        <div className={styles.wrap}>
            <footer>
                <div className={`${styles.description} container`}>
                    <div className={styles.text}>
                        <p>Copyright © 2024</p> <Logo/>
                    </div>
                </div>
            </footer>
        </div>
    )
}