import type {Metadata} from "next";
import styles from "./page.module.scss";
import {NewPost} from "@/components/NewPost/NewPost";
import Link from "next/link";

export const metadata: Metadata = {
    title: "CleanTown | Новости",
};

export default function News() {
    return (
        <div className={`container`}>
            <h3 className="current-page"><Link href="/">Главная</Link> / <b className="current-page">Новости</b></h3>
            <h1 className={styles.h1}>Актуальные <i>новости</i></h1>
            <div className={styles.news}>
                <NewPost title="Специальное предложение: -20% на услуги для новых клиентов!"
                         text="До конца месяца все новые клиенты могут воспользоваться скидкой 20% на любую услугу.
                         Успейте сделать ваш дом или офис безупречно чистым по выгодной цене!"
                         date="01.12.2024"/>
                <NewPost title="Новая услуга: химчистка мягкой мебели прямо у вас дома!"
                         text="Рады сообщить о запуске новой услуги! Наши специалисты используют современное оборудование
                         и гипоаллергенные средства для профессиональной химчистки диванов, кресел и ковров прямо у вас дома.
                         Вам не придется тратить время на доставку мебели в клининговые центры."
                         date="21.11.2024"/>
                <NewPost title="Мы расширяем географию: теперь CleanTown доступен в вашем городе!"
                         text="CleanTown выходит на новый уровень! Теперь мы обслуживаем клиентов в двух новых регионах. Узнайте,
                         доступен ли наш сервис в вашем городе, и закажите профессиональную уборку уже сегодня!"
                         date="02.11.2024"/>
            </div>
        </div>
    );
}
