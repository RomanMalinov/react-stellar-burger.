import Ingredient from "./ingredient";
import styles from "./burger-ingredients.module.css";
import IngredientSection from "./ingredient-section";
import { useSelector } from "react-redux";

const BurgerList = ({ type }) => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  if (!ingredients || ingredients.length === 0) {
    return <p>Ожидается загрузка данных</p>;
  }

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type === type
  );

  return (
    <IngredientSection
      title={type === "bun" ? "Булки" : type === "sauce" ? "Соусы" : "Начинки"}
    >
      {filteredIngredients.map((ingredient) => (
        <Ingredient key={ingredient._id} ingredient={ingredient} />
      ))}
    </IngredientSection>
  );
};

export default BurgerList;
