import BurgerTab from "./burger-tab";
import BurgerList from "./burger-list";
import styles from "./burger-ingredients.module.css";

const BurgerIngredients = () => {
  return (
    <section className={styles.ingredientsConteiner}>
      <h2 className={styles.ingredientsTitle}>Соберите бургер</h2>
      <div>
        <BurgerTab />
        <BurgerList />
      </div>
    </section>
  );
};

export default BurgerIngredients;
