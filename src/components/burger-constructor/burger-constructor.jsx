import data from "../../utils/data.js";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ListInternalElements from "./constructor-element.jsx";
import FinalPrice from "./final-price.jsx";

const BurgerConstructor = () => {
  const externalListEl = data.find((item) => item.type === "bun");
  const internalListEl = data.filter((item) => item.type !== "bun");
  const allSum = data.reduce((prevVal, item) => prevVal + item.price, 0);

  return (
    <section className={styles.constructorConteiner}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${externalListEl.name} (верх)`}
          price={externalListEl.price}
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
      <FinalPrice sum={allSum}/>
    </section>
  );
};

export default BurgerConstructor;
