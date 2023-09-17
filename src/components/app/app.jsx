import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/api";

// import OrderDetails from "../order-details/order-details";
// import IngredientDetails from "../inrredient-details/inrredient-details";


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
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.contentConteiner}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
      {/* <OrderDetails />
      <IngredientDetails /> */}
    </div>

  );
}

export default App;
