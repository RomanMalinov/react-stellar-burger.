import Ingredient from "./ingredient";
import styles from "./burger-ingredients.module.css";
import IngredientSection from "./ingredient-section";

function BurgerList({ ingredients }) {
  console.log(ingredients)

  if (!ingredients || ingredients.length === 0) {
    return <p>Ожидается загрузка данных</p>;
  }

  const sortIngredient = listIngredient(ingredients);
  return (
    <div className={`${styles.scrollContainer} custom-scroll`}>
      <IngredientSection title="Булки">
        {sortIngredient.buns}
      </IngredientSection>
      <IngredientSection title="Соусы">
        {sortIngredient.sauces}
      </IngredientSection>
      <IngredientSection title="Начинки">
        {sortIngredient.mains}
      </IngredientSection>
    </div>
  );
}

function listIngredient(data) {
  const buns = [];
  const mains = [];
  const sauces = [];

  data.forEach((element) => {
    const ingredientCard = <Ingredient key={element._id} ingredient={element} />;
    if (element.type === "main") {
      mains.push(ingredientCard);
    } else if (element.type === "bun") {
      buns.push(ingredientCard);
    } else if (element.type === "sauce") {
      sauces.push(ingredientCard);
    }
  });
  const sortIngredient = {
    mains: mains,
    buns: buns,
    sauces: sauces,
  };
  return sortIngredient;
}

export default BurgerList;
