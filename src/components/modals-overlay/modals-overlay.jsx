import styles from "./modals-overlay.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";

const ModalOverlay = ({ handleClose }) => {
  return <div className={styles.overlay} onClick={handleClose}></div>;
};

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
