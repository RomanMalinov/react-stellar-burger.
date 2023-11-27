import styles from "./burger-constructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ListInternalElements from "./constructor-element.jsx";
import FinalPrice from "./final-price.jsx";
import { setOrderNumber } from "../../services/orderDetailsSlice";
import { getOrder } from "../../utils/api";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../services/constructorIngedientSlice";

const BurgerConstructor = () => {
  // const ingredients = useSelector((state) => state.ingredientList.ingredients);
  const ingredients = useSelector(
    (state) => state.constructorIngedient.ingredients
  );
   const bun = useSelector (
    (state) => state.constructorIngedient.bun
  )

  const allSum = useMemo(() => {
    return ingredients.reduce((prevVal, item) => prevVal + item.price, 0);
  }, [ingredients]);

  const dispatch = useDispatch();
  // if (!ingredients || ingredients.length === 0) {
  //   return (
  //     <div style={{ backgroundColor: "blue", width: "500px" }}>
  //       <p>Перетащите ингредиент</p>
  //     </div>
  //   );
  // }

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (item) => {
      // Здесь вы можете обработать событие drop и добавить ингредиент в конструктор
      dispatch(addIngredient(item));
    },
  });

  const externalListEl = ingredients.find((item) => item.type === "bun");
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
      <div className={styles.elementsConteiner}>
        {externalListEl && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${externalListEl.name} (верх)`}
            thumbnail={externalListEl.image}
          />
        )}
        <ul className={`${styles.listInternalConteiner} custom-scroll`}>
          <ListInternalElements data={internalListEl} />
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
      <FinalPrice sum={allSum} onOrderClick={handleOrderClick} />
    </section>
  );
};

export default BurgerConstructor;

// import styles from "./burger-constructor.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useMemo } from "react";
// import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// import ListInternalElements from "./constructor-element.jsx";
// import FinalPrice from "./final-price.jsx";
// import { setOrderNumber } from "../../services/orderDetailsSlice";
// import { getOrder } from "../../utils/api";

// const BurgerConstructor = () => {

//   // const allSum = useMemo(() => {
//   //   return ingredients.reduce((prevVal, item) => prevVal + item.price, 0);
//   //   }, [ingredients]);

//   const dispatch = useDispatch();
//   const ingredients = useSelector((state) => state.constructorIngedient.ingredients);

//   console.log(ingredients);
//   if (!ingredients || ingredients.length === 0) {
//     return <p>Ожидается загрузка данных</p>;
//   }
//   const externalListEl = ingredients.find((item) => item.type === "bun");

//   const internalListEl = ingredients.filter((item) => item.type !== "bun");

//   const handleOrderClick = () => {

//     const ingredientIds = ingredients
//       .filter((item) => item.type !== "bun")
//       .map((item) => item._id);

//     getOrder(ingredientIds)
//       .then((data) => {
//         dispatch(setOrderNumber(data.order.number));
//       })

//       .catch((error) => {
//         console.error("Ошибка при создании заказа:", error);
//       });
//   };

//   return (
//     <section className={styles.constructorConteiner}>
//       <div className={styles.elementsConteiner}>
//         <ConstructorElement
//           type="top"
//           isLocked={true}
//           text={`${externalListEl.name} (верх)`}
//           thumbnail={externalListEl.image}
//         />
//         <ul className={`${styles.listInternalConteiner} custom-scroll`}>
//           <ListInternalElements data={internalListEl} />
//         </ul>
//         <ConstructorElement
//           type="bottom"
//           isLocked={true}
//           text={`${externalListEl.name} (низ)`}
//           price={externalListEl.price}
//           thumbnail={externalListEl.image}
//         />
//       </div>
//       {/* <FinalPrice sum={allSum} onOrderClick={handleOrderClick} /> */}
//       <FinalPrice  onOrderClick={handleOrderClick} />
//     </section>
//   );
// };

// export default BurgerConstructor;
