import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ListInternalElements from "./constructor-element.jsx";
import FinalPrice from "./final-price.jsx";
import { setOrderNumber } from "../../services/orderDetailsSlice";
import { getOrder } from "../../utils/api";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../services/constructorIngedientSlice";
import { addBuns } from "../../services/constructorIngedientSlice";

const BurgerConstructor = () => {
  const ingredients = useSelector(
    (state) => state.constructorIngedient.ingredients
  );
  const bun = useSelector((state) => state.constructorIngedient.buns);

  const allSum = useMemo(() => {
    const bunsSum = bun ? bun.price * 2 : 0;
    const internalSum = ingredients.reduce(
      (prevVal, item) => prevVal + item.price,
      0
    );
    return bunsSum + internalSum;
  }, [ingredients, bun]);

  const dispatch = useDispatch();
  const [{ isOver }, dropRef] = useDrop({
    accept: ["ingredient", "bun"],
    drop: (item) => {
      if (item.type === "bun") {
        dispatch(addBuns(item));
      } else {
        dispatch(addIngredient(item));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const borderColor = isOver ? "#f2f2f3" : "#131316";

  const externalListEl = bun;
  const internalListEl = ingredients.filter((item) => item.type !== "bun");

  const handleOrderClick = () => {
    const ingredientIds = ingredients
      .filter((item) => item.type !== "bun")
      .map((item) => item._id);

    getOrder(ingredientIds)
      .then((data) => {
        dispatch(setOrderNumber(data.order.number));
      })

      .catch((error) => {
        console.error("Ошибка при создании заказа:", error);
      });
  };

  return (
    <section className={styles.constructorConteiner} ref={dropRef}>
      {!externalListEl && internalListEl.length === 0 && (
        <div className={styles.hiddenConteiner}>
          <p className={`${styles.hiddenText} text text_type_main-large`}>
            Добавьте ингредиенты
          </p>
        </div>
      )}

      {(externalListEl || internalListEl.length > 0) && (
        <div className={styles.elementsConteiner} style={{ borderColor }}>
          {externalListEl && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${externalListEl.name} (верх)`}
              thumbnail={externalListEl.image}
            />
          )}
          <ul className={`${styles.listInternalConteiner} custom-scroll`}>
            <ListInternalElements
              data={internalListEl}
              ingredients={ingredients}
            />
          </ul>
          {externalListEl && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${externalListEl.name} (низ)`}
              price={externalListEl.price}
              thumbnail={externalListEl.image}
            />
          )}
        </div>
      )}

      <FinalPrice sum={allSum} onOrderClick={handleOrderClick} />
    </section>
  );
};

export default BurgerConstructor;
