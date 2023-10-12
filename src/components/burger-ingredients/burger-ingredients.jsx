import BurgerTab from "./burger-tab";
import BurgerList from "./burger-list";
import styles from "./burger-ingredients.module.css";
import { useSelector } from "react-redux";

const BurgerIngredients = () => {
  return (
    <section className={`${styles.ingredientsConteiner} custom-scroll`}>
      <h2 className={`${styles.ingredientsTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>

      <BurgerTab />
      <section className={`${styles.scrollContainer} custom-scroll`}>
        <div id="buns-section"></div>
        <BurgerList type="bun" />
        <div id="sauces-section">
          <BurgerList type="sauce" />
        </div>
        <div id="mains-section">
          <BurgerList type="main" />
        </div>
      </section>
    </section>
  );
};

export default BurgerIngredients;
