import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";

const Ingredient = ({ props }) => {
  return (
    <div className={styles.IngregientConteiner}>
      <Counter count={1} size="default" classname="counter" />
      <img className={styles.img} src={props.image} alt={props.name}></img>
      <div className={styles.priceConteiner}>
        <p className={`text text_type_digits-default`}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.imgText} text text_type_main-small`}>{props.name}</p>
    </div>
  );
};

Ingredient.propTypes = {
  props: ingredientPropType.isRequired,
};

export default Ingredient;
