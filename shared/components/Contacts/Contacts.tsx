import styles from './Contacts.module.scss'
import {Mail, Phone} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Contacts() {
    return (
        <div className="container">
            <h1 className={styles.blockTitle}>Контакты</h1>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <h2>Clean<i>Town</i></h2>
                    <div className={styles.row}>
                        <span>Адрес офиса:</span>
                        <a href="https://yandex.ru/maps/-/CHAnR4NN"><h3>г. Москва, ул. Кирпичная, дом 33, офис 523</h3>
                        </a>
                    </div>
                    <div className={styles.row}>
                        <span>Реквизиты:</span>
                        <h3>ИНН 123456789 ОГРН 123456789</h3>
                    </div>
                </div>
                <div className={`${styles.block} ${styles.contacts}`}>
                    <div className={styles.contact}>
                        <span>Номер телефона:</span>
                        <div className={styles.phoneMail}>
                            <Phone/>
                            +7 (993) 123-45-67
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <span>Соцсети:</span>
                        <div className={styles.socials}>
                            <div className={styles.social}><a href=""><Image src="/tg.svg" alt="" width={60}
                                                                              height={60}/></a></div>
                            <div className={styles.social}><a href=""><Image src="/vk.svg" alt="" width={60}
                                                                              height={60}/></a></div>
                            <div className={styles.social}><a href=""><Image src="/youtube.svg" alt="" width={60}
                                                                              height={60}/></a></div>
                            <div className={styles.social}><a href="https://github.com/hilarylfg"><Image src="/github.svg" alt="" width={60}
                                                                              height={60}/></a></div>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <span>Email:</span>
                        <div className={styles.phoneMail}>
                            <Mail/>
                            cleantown@gmail.com
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <h2>Важное ссылки</h2>
                    <ul>
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/services">Услуги</Link></li>
                        <li><Link href="/reviews">Отзывы</Link></li>
                        <li><Link href="/about">О нас</Link></li>
                        <li><Link href="/certificates">Сертификаты</Link></li>
                        <li><Link href="/news">Новости</Link></li>
                        <li><Link href="/usually-questions">Частые вопросы</Link></li>
                        <li><Link href="/form">Оставить заявку</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}