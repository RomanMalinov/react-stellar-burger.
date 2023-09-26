import React, { useEffect, useState, useContext } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/api";
import {
  IngredientsContext,
  ConstructorContext,
  OrderCotext,
} from "../../services/context";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных из API:", error);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.contentConteiner}>
        <IngredientsContext.Provider value={ingredients}>
          {/* <OrderCotext>
            <ConstructorContext> */}
              <BurgerIngredients  />
            {/* </ConstructorContext>
          </OrderCotext> */}
        </IngredientsContext.Provider>
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </div>
  );
}

export default App;
