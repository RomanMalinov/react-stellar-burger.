import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import Modal from '../modals/modals';
import IngredientDetails from '../inrredient-details/inrredient-details';

const IngredientSection = ({ title, children }) => {
  return (
    <div>
      <h3 className={`${styles.subTitel} text text_type_main-medium`}>
        {title}
      </h3>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

IngredientSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default IngredientSection;


