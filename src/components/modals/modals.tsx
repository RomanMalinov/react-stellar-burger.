import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modals-overlay/modals-overlay";
import styles from "./modals.module.css";

type TModalProps = {
  children: JSX.Element;
  handleClose: () => void;
}

const modalRoot = document.getElementById("modals") as HTMLElement;;

const Modal = ({ children, handleClose }: TModalProps) => {
  useEffect(() => {
    const handleESCclose = (key: KeyboardEvent) => key.key === "Escape" && handleClose();
    document.addEventListener("keydown", handleESCclose);
    return () => document.removeEventListener("keydown", handleESCclose);
  }, [handleClose]);

  return createPortal(
    <section className={styles.conteiner}>
      <div className={styles.innerContainer}>
        <div className={styles.button} onClick={handleClose}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
      <ModalOverlay handleClose={handleClose} />
    </section>,
    modalRoot
  );
};

export default Modal;
