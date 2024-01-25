import styles from "./order-card-ingredient.module.css";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function OrderCardIngredient() {
  return (
    <Link className={styles.conteiner}>
      <div className={styles.numberDate}>
        <p className={`${styles.number} text text_type_digits-default`}>
          fdfdfdfd
        </p>
        <p
          className={`${styles.date} text text_type_main-default text_color_inactive`}
        >
          {/* <FormattedDate /> */}dffddffd
        </p>
      </div>
      <h4 className={`${styles.info} text text_type_main-medium`}>
        544444444444454554
      </h4>
      {/* логика создан, готово, готовится */}
      <div className={styles.ingredients}>

          <div className={styles.ingredientsInnerConteiner}>
            <img className={styles.img} src="" alt="" />
            <div className={styles.counter}>
              <p className="text text_type_digits-default">0</p>
            </div>
          </div>
          <div className={styles.count}>
            <p className={`text text_type_digits-default`}>443344343</p>
            <CurrencyIcon />
          </div>
        </div>

    </Link>
  );
}
export default OrderCardIngredient;
