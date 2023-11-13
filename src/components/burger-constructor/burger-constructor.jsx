import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ListInternalElements from "./constructor-element.jsx";
import FinalPrice from "./final-price.jsx";

import { getOrder } from "../../utils/api";

const BurgerConstructor = ({ ingredients, orderNumber, onOrderClick }) => {
  const externalListEl = ingredients.find((item) => item.type === "bun");
  if (!externalListEl) {
    return <p>Не найдено булок для бургера.</p>;
  }

  const internalListEl = ingredients.filter((item) => item.type !== "bun");
  const allSum = ingredients.reduce((prevVal, item) => prevVal + item.price, 0);

  return (
    <section className={styles.constructorConteiner}>
      <div className={styles.elementsConteiner}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${externalListEl.name} (верх)`}
          thumbnail={externalListEl.image}
        />
        <ul className={`${styles.listInternalConteiner} custom-scroll`}>
          <ListInternalElements data={internalListEl} />
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${externalListEl.name} (низ)`}
          price={externalListEl.price}
          thumbnail={externalListEl.image}
        />
      </div>
      <FinalPrice
        sum={allSum}
        orderNumber={orderNumber}
        onOrderClick={onOrderClick}
      />
    </section>
  );
};

export default BurgerConstructor;


// import { useMemo } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { useDrop } from 'react-dnd';
// import styles from "./burger-constructor.module.css";
// import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// import ListInternalElements from "./constructor-element.jsx";
// import FinalPrice from "./final-price.jsx";

// import { getOrder, getIngredients, removeIngredient } from "../../utils/api";

// const BurgerConstructor = ({ orderNumber, onOrderClick }) => {
//   const dispatch = useDispatch();
//   const bun = useSelector((state) => state.order.bun);
//   const ingredients = useSelector((state) => state.order.ingredients);

//   const allSum = useMemo( () => {
//     const ingredientsSum = ingredients.reduce((prevVal, item) => prevVal + item.price, 0);
//     return ingredientsSum + (bun ? 2 * bun.price : 0);
//   }, [ingredients, bun]);

//   // Drop target logic
//   const [, drop] = useDrop(() => ({
//     accept: 'ingredient',
//     drop(item) {
//       // Logic to handle ingredient when dropped
//       dispatch(getIngredients(item.ingredient));
//     }
//   }));

//   if (!bun) {
//     return <div className={styles.emptyConteiner}>Перетащить сюда</div>
//   }

//   return (
//     <section ref={drop} className={styles.constructorConteiner}>
//       <div className={styles.elementsConteiner}>
//         <ConstructorElement
//           type="top"
//           isLocked={true}
//           text={`${bun.name} (верх)`}
//           thumbnail={bun.image}
//         />
//         <ul className={`${styles.listInternalConteiner} custom-scroll`}>
//           <ListInternalElements data={ingredients} />
//         </ul>
//         <ConstructorElement
//           type="bottom"
//           isLocked={true}
//           text={`${bun.name} (низ)`}
//           price={bun.price}
//           thumbnail={bun.image}
//         />
//       </div>
//       <FinalPrice
//         sum={allSum}
//         orderNumber={orderNumber}
//         onOrderClick={onOrderClick}
//       />
//     </section>
//   );
// };

// export default BurgerConstructor;
