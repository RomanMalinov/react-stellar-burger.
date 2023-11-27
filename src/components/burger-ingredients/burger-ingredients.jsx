import BurgerTab from "./burger-tab";
import BurgerList from "./burger-list";
import styles from "./burger-ingredients.module.css";
import { useSelector } from "react-redux";


const BurgerIngredients = () => {



  const ingredients = useSelector(state => state.ingredientList.ingredients);
  return (
    <section className={styles.ingredientsConteiner}>
      <h2 className={`${styles.ingredientsTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <div>
        <BurgerTab />
        <BurgerList ingredients={ingredients} />
      </div>
    </section>
  );
};



export default BurgerIngredients;
