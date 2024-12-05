import type {Metadata} from "next";
import styles from "./page.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
    title: "CleanTown | Сертификаты",
};

export default function Certificates() {
    return (
        <div className={`container`}>
            <h3 className="current-page"><Link href="/">Главная</Link> / <b className="current-page">Сертификаты</b>
            </h3>
            <h1 className={styles.h1}>Наши <i>сертификаты</i></h1>
            <div className={styles.photos}>
                <div>
                    <img src="/certificates/certificate1.png" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate2.png" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate3.png" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate4.jpg" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate5.jpg" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate6.jpg" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate7.webp" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate8.jpg" alt=""/>
                </div>
                <div>
                    <img src="/certificates/certificate9.webp" alt=""/>
                </div>
            </div>
        </div>
    );
}
