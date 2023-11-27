import Ingredient from "./ingredient";
import styles from "./burger-ingredients.module.css";
import IngredientSection from "./ingredient-section";
import { useSelector } from "react-redux";


function BurgerList({ ingredients }) {
  console.log(ingredients);



  // const { status, error } = useSelector(
  //   (state) => state.ingredientList.ingredients
  // );
  // {status === 'loading' && <h2>Loading...</h2>}
  // {error && <h2>An error occured: {error}</h2>}

  // if (!ingredients || ingredients.length === 0) {
  //   return <p>Ожидается загрузка данных</p>;
  // }

  const isLoading = useSelector((state) => state.ingredientList.isLoading);
  const error = useSelector((state) => state.ingredientList.error); // объеденить в деструктуризации

  if (isLoading) {
    return <p>загрузка</p>;
  }

  if (!isLoading && error) {
    return <p>{`Error: ${error}`}</p>;
  }
  // доработать и стили задать
  if (!isLoading && ingredients.length === 0) {
    return <p>Нет ингредиентов</p>;
  }

  const sortIngredient = listIngredient(ingredients);
  return (
    <div className={`${styles.scrollContainer} custom-scroll`}>
      <IngredientSection title="Булки">{sortIngredient.buns}</IngredientSection>
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
    const ingredientCard = (
      <Ingredient key={element._id} ingredient={element} />
    );
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
