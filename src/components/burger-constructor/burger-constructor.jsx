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
