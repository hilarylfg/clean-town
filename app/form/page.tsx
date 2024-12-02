import styles from "./page.module.scss";
import type {Metadata} from "next";
import {CleanForm} from "@/shared/components";

export const metadata: Metadata = {
    title: "CleanTown | Отправить заявку",
};

export default function Form() {
    return (
        <>
            <div className="form container">
                <div className={styles.title}>
                    <h1>Оставьте <i>заявку</i></h1>
                    <h2>и мы Вам перезвоним в удобное для Вас время!</h2>
                </div>
                <CleanForm/>
            </div>
        </>
    );
}