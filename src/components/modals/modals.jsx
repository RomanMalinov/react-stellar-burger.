import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modals-overlay/modals-overlay";
import styles from "./modals.module.css";

const modalRoot = document.getElementById("modals");

const Modal = ({ children, handleClose }) => {
  useEffect(() => {
    const handleESCclose = (key) => key.key === "Escape" && handleClose();
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
