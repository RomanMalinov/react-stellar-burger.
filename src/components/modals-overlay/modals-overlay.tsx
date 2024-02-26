import styles from "./modals-overlay.module.css";
import PropTypes from "prop-types";

type TModalOverlayProps = {
  handleClose: () => void;
};

const ModalOverlay = ({ handleClose }: TModalOverlayProps) => {
  return <div className={styles.overlay} onClick={handleClose}></div>;
};

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
