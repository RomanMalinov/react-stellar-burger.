import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";

const FinalPrice = ({ sum }) => {
  return (
    <section className={styles.priceConteiner}>
      <div className={styles.cont}>
        <p className={`${styles.textSum} text text_type_digits-medium`}>{sum}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        width="36px"
        height="36px"
      >
        Оформить заказ
      </Button>
    </section>
  );
};

FinalPrice.propTypes = {
  sum: PropTypes.number.isRequired,
};

export default FinalPrice;
