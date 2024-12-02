"use client";

import { ChangeEvent, useState } from "react";
import { FieldError, FieldValues, UseFormClearErrors, UseFormRegister } from "react-hook-form";
import styles from "./ContactInput.module.scss";

interface ContactInputProps {
    contactValue?: string;
    setContactValue?: (value: string) => void;
    register: UseFormRegister<FieldValues>;
    errors: Record<string, FieldError | undefined>;
    clearErrors: UseFormClearErrors<FieldValues>;
}

export function ContactInput(props: ContactInputProps) {
    const [localContactValue, setLocalContactValue] = useState<string>("");
    const contactValue = props.contactValue ?? localContactValue;
    const setContactValue = props.setContactValue ?? setLocalContactValue;

    const phonePattern = /^(\+7|8)\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/;
    const phoneInputPattern = /[^0-9]/g;

    const maskPhoneNumber = (value: string) => {
        const inputNumbersValue = value.replace(phoneInputPattern, '');
        let formatted: string = '';
        formatted += `(${inputNumbersValue.substring(1, 4)}`;
        if (inputNumbersValue.length > 4) formatted += `) ${inputNumbersValue.substring(4, 7)}`;
        if (inputNumbersValue.length > 7) formatted += `-${inputNumbersValue.substring(7, 9)}`;
        if (inputNumbersValue.length > 9) formatted += `-${inputNumbersValue.substring(9, 11)}`;
        return formatted;
    };

    const handlePhoneMode = (value: string) => {
        return maskPhoneNumber(value);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        props.clearErrors('contact');
        value = handlePhoneMode(value);
        setContactValue(value);
    };

    return (
        <div className={styles.row}>
            <h2 className={styles.title}>Телефон*</h2>
            <input
                type={"tel"}
                placeholder={"Телефон*"}
                maxLength={18}
                minLength={5}
                value={'+7 ' + contactValue}
                {...props.register("contact", {
                    required: "Это поле обязательное",
                    pattern: {
                        value: phonePattern,
                        message: "Номер телефона должен быть в формате +7 или 8 (XXX) XXX-XX-XX",
                    },
                    onChange: handleChange,
                })}
            />
            {props.errors.contact && <p className={styles.error}>{props.errors.contact.message}</p>}
        </div>
    );
}