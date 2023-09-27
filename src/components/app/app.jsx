import { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/api";
import { IngredientsContext, ConstructorContext, OrderContext,} from "../../services/context";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [orderNumber, setOrderNumber] = useState(null);

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
          <OrderContext.Provider value={{ orderNumber, setOrderNumber }}>
            <ConstructorContext.Provider value={ingredients}>
              <BurgerIngredients />
              <BurgerConstructor />
            </ConstructorContext.Provider>
          </OrderContext.Provider>
        </IngredientsContext.Provider>
      </main>
    </div>
  );
}

export default App;
