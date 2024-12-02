"use client";

import {FieldError, FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {PopupModal} from "@/components/PopupModal/PopupModal";
import {ContactInput, NameInput, TextInput} from "@/components/Inputs";
import styles from "./CleanForm.module.scss";

export function CleanForm() {
    const {register, handleSubmit, reset, formState: {errors}, clearErrors} = useForm({
        mode: "onBlur",
    });

    const [contactValue, setContactValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false)

    const onSubmit: SubmitHandler<FieldValues> = (data: object) => {
        console.log(data);
        setIsOpen(true);
        reset();
        setContactValue("");
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} method="POST" className={styles.form}>
                <div className={`${styles.leftColumn} ${styles.block}`}>
                    <div className={styles.inputs}>
                        <NameInput
                            label="Имя*"
                            name="firstname"
                            register={register}
                            errors={errors as Record<string, FieldError | undefined>}
                            clearErrors={clearErrors}
                        />
                        <NameInput
                            label="Фамилия*"
                            name="lastname"
                            register={register}
                            errors={errors as Record<string, FieldError | undefined>}
                            clearErrors={clearErrors}
                        />
                        <ContactInput
                            contactValue={contactValue}
                            setContactValue={setContactValue}
                            register={register}
                            errors={errors as Record<string, FieldError | undefined>}
                            clearErrors={clearErrors}
                        />
                    </div>
                </div>

                <div className={`${styles.textarea} ${styles.block}`}>
                    <TextInput
                        label="Опишите работу (помещение, площадь, сроки и т.д.)"
                        name="message"
                        register={register}
                        errors={errors as Record<string, FieldError | undefined>}
                    />
                    <button className={styles.buttonForm} type="submit">Записаться</button>
                </div>
            </form>
            <PopupModal isOpen={isOpen} setIsOpen={setIsOpen} title="Поздравляем! Вы успешно оставили заявку!">Скоро мы
                с Вами свяжемся для обсуждения деталей заявки!</PopupModal>
        </>
    );
}