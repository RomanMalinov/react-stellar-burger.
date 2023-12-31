import styles from "./inredient-details.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import { useSelector } from "react-redux";

const IngredientDetails = () => {

  const ingredient = useSelector((state) => state.ingredientDetails.ingredient);

  return (
    <section className={`${styles.conteiner}`}>
      <h3 className={`${styles.title} text text_type_main-large`}>
        Детали ингредиента
      </h3>
      <img
        className={styles.img}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className={`${styles.nsmeIngregient} text text_type_main-medium`}>
        {ingredient.name}
      </p>
      <div
        className={`${styles.conteinerNutritions} text text_type_main-default text_color_inactive`}
      >
        {/* перенести в род контерйнер общие свойства дочек */}
        <div>
          <p>Калории,ккал</p>
          <p>{ingredient.calories}</p>
        </div>
        <div>
          <p>Белки, г</p>
          <p>{ingredient.proteins}</p>
        </div>
        <div>
          <p>Жиры, г</p>
          <p>{ingredient.fat}</p>
        </div>
        <div>
          <p>Углеводы, г</p>
          <p>{ingredient.carbohydrates}</p>
        </div>
      </div>
    </section>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientDetails;


