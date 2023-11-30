import BurgerTab from "./burger-tab";
import BurgerList from "./burger-list";
import styles from "./burger-ingredients.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

const BurgerIngredients = () => {
  const ingredients = useSelector((state) => state.ingredientList.ingredients);
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: "bun",
    item: { type: "bun" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <section className={styles.ingredientsConteiner}>
      <h2 className={`${styles.ingredientsTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <div>
        <BurgerTab />
        <div ref={dragRef}>
          {/* Оборачиваем ингредиент "bun" в dragRef */}
          <BurgerList ingredients={ingredients} />
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
