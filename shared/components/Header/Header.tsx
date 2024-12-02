import styles from './Header.module.scss'
import {User} from "lucide-react";
import {Logo} from "@/shared/components";

export function Header() {
    return (
        <header className={`${styles.header} container`}>
            <nav className={styles.navbar}>
                <Logo/>
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>
                        Услуги
                    </li>
                    <li className={styles.menu_item}>
                        О нас
                    </li>
                    <li className={styles.menu_item}>
                        Новости
                    </li>
                </ul>
                <div className={styles.auth_item}>
                    <div className={styles.button}>
                        <User width={25}/>
                        <p>Профиль</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}