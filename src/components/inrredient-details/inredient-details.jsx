import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./inredient-details.module.css";
import propTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import { getActiveIngredient } from "../../services/ingredientDetailsSlice";
import { setCurrentInformationIngredient } from "../../services/ingredientDetailsSlice";
import { useMemo } from "react";

const IngredientDetails = () => {
  const { ingredientId } = useParams();
  const allIngredients = useSelector((state) => state.ingredientList.ingredients);
  const ingredient = useMemo(() => allIngredients.find((item) =>
  item._id === ingredientId), [allIngredients, ingredientId])

  if (!ingredient) {
    return <div>Ингредиент не найден</div>;
  }
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

// IngredientDetails.propTypes = {
//   ingredient: ingredientPropType.isRequired,
// };

export default IngredientDetails;
