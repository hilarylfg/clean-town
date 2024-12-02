import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import styles from "./PopupModal.module.scss"
import {CloseModalButton} from "./CloseModalButton/CloseModalButton";
import {ReactNode} from "react";

interface PopupModalProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void;
    title?: string;
    children?: string | ReactNode;
}

export function PopupModal({isOpen, setIsOpen, title, children}: PopupModalProps) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.dialog}>
            <div className={styles.background}>
                <DialogPanel className={styles.panel}>
                    <CloseModalButton setIsOpen={setIsOpen}/>
                    {title &&
                        <div className={styles.header}>
                            <DialogTitle className={styles.title}>{title}</DialogTitle>
                        </div>
                    }
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    )
}
