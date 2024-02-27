import styles from "./modals-overlay.module.css";

type TModalOverlayProps = {
  handleClose: () => void;
};

const ModalOverlay = ({ handleClose }: TModalOverlayProps) => {
  return <div className={styles.overlay} onClick={handleClose}></div>;
};

export default ModalOverlay;
