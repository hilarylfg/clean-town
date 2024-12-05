import styles from "./page.module.scss"
import type {Metadata} from "next";
import {Review} from "@/shared/components";
import Link from "next/link";

export const metadata: Metadata = {
    title: "CleanTown | Отзывы",
};

export default function Reviews() {
    return (
        <div className={`container`}>
            <h3 className="current-page"><Link href="/">Главная</Link> / <b className="current-page">Отзывы</b></h3>
            <h1 className="h1">Отзывы <i>клиентов</i></h1>
            <div className={styles.reviews}>
                <Review title="Ирина П."
                        text="Клининговая компания—это надежный выбор в сфере уборки квартир. У них работают профессионалы
                        с качественным оборудованием, которые заботятся о каждой детали. Спасибо за ваше качество и отзывчивость!"/>
                <Review title="Андрей К."
                        text="Чистка мягкой мебели превзошла ожидания! Диван выглядит как новый, хотя я уже думал, что пятна не отойдут.
                        Буду обращаться снова и рекомендовать друзьям."/>
                <Review title="Олег М."
                        text="Советую всем данную компанию. Компания поразила меня своей профессиональной уборкой квартиры. Все было
                        выполнено вовремя и очень качественно. Спасибо за отличную работу!"/>
                <Review title="Татьяна А."
                        text="Давно искала компанию, которая так профессионально относится к уборке. Удивило внимание к деталям: даже
                        самые сложные пятна были удалены! Очень довольна результатом, спасибо CleanTown!"/>
            </div>
        </div>
    );
}
