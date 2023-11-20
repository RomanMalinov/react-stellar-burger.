import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ListInternalElements from "./constructor-element.jsx";
import FinalPrice from "./final-price.jsx";

import { getOrder } from "../../utils/api";

const BurgerConstructor = ({ ingredients }) => {

  // const { setOrderNumber } = useContext(OrderContext);

  console.log(ingredients);
  if (!ingredients || ingredients.length === 0) {
    return <p>Ожидается загрузка данных</p>;
  }
  const externalListEl = ingredients.find((item) => item.type === "bun");
  const internalListEl = ingredients.filter((item) => item.type !== "bun");
  const allSum = ingredients.reduce((prevVal, item) => prevVal + item.price, 0);

  const handleOrderClick = () => {
    const ingredientIds = ingredients.filter((item) => item.type !== "bun").map((item) => item._id);
    getOrder(ingredientIds)
      .then((data) => {
        // setOrderNumber(data.order.number);
      })
      .catch((error) => {
        console.error("Ошибка при создании заказа:", error);
      });
  };

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
      <FinalPrice sum={allSum} onOrderClick={handleOrderClick} />
    </section>
  );
};

export default BurgerConstructor;
