import { useMemo } from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ListInternalElements from "./constructor-element";
import FinalPrice from "./final-price";
import { setOrderNumber } from "../../services/orderDetailsSlice";
import { getOrder } from "../../utils/api";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../services/constructorIngedientSlice";
import { addBuns } from "../../services/constructorIngedientSlice";
import { RootState } from "../../services/store";
import { TIngredient } from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../../services/store";

const BurgerConstructor = () => {

  const burgerIngredients = (state: RootState) => state.constructorIngedient.ingredients;
  const burgertBun = (state: RootState) => state.constructorIngedient.buns;
  const ingredients = useAppSelector(burgerIngredients);
  const bun = useAppSelector(burgertBun);

  const allSum = useMemo(() => {
    const bunsSum = bun ? bun.price * 2 : 0;
    const internalSum = ingredients.reduce(
      (prevVal, item) => prevVal + item.price,
      0
    );
    return bunsSum + internalSum;
  }, [ingredients, bun]);

  const dispatch = useAppDispatch();
  const [{ isOver }, dropRef] = useDrop({
    accept: ["ingredient", "bun"],
    drop: (item: TIngredient) => {
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
    const bunId = bun ? [bun._id, bun._id] : [];
    const ingredientIds = [
      ...bunId,
      ...ingredients
        .filter((item) => item.type !== "bun")
        .map((item) => item._id),
    ];
    getOrder(ingredientIds)
      .then((data: any) => {
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
              price={bun.price}
            />
          )}
          <ul className={`${styles.listInternalConteiner} custom-scroll`}>
            <ListInternalElements
              data={internalListEl}
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
