import styles from './Header.module.scss'
import {Phone} from "lucide-react";
import {Logo} from "@/shared/components";
import Link from "next/link";

export function Header() {
    return (
        <header className={`${styles.header} container`}>
            <nav className={styles.navbar}>
                <Logo/>
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>
                        <Link href="/services">Услуги</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href="/about">О нас</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href="/news">Новости</Link>
                    </li>
                </ul>
                <div className={styles.contact_item}>
                    <div className={styles.button}>
                        <Phone />
                        +7 (993) 123-45-67
                    </div>
                </div>
            </nav>
        </header>
    );
}