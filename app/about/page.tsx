import styles from './page.module.scss'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "CleanTown | О нас",
};

export default function About() {
    return (
        <div className={`container`}>
            <h3 className="current-page">Главная / <b className="current-page">О нас</b></h3>
            <div className={styles.about}>
                <div className={styles.text}>
                    <p>Наша компания &#34;CleanTown&#34; специализируется на профессиональной уборке любых помещений и
                        поверхностей.
                        Мы уверены, что чистота — это залог комфорта и уюта, поэтому подходим к своей работе с
                        максимальной
                        ответственностью и вниманием к деталям.

                        Мы начали свой путь с небольшой команды, но благодаря качеству услуг и доверию клиентов выросли
                        в
                        крупную компанию с современным оборудованием и высококвалифицированными специалистами. Сегодня
                        &#34;CleanTown&#34; — это не просто клининговая компания, а надёжный партнёр, которому доверяют
                        уход за
                        домами, офисами и коммерческими пространствами.</p>

                    <span>&#34;CleanTown&#34; - ваш путь к идеальной чистоте!</span>
                </div>
                <img src="/onas1.webp" alt=""/>
            </div>
        </div>
    );
}
