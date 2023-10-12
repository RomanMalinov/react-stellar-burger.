import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { fetchIngredients } from "../../services/ingredientsSlice";
import { createOrder } from "../../services/orderSlice";

function App() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const orderNumber = useSelector((state) => state.order.orderNumber);
  const isLoading = useSelector((state) => state.ingredients.isLoading);
  const error = useSelector((state) => state.ingredients.error);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleOrderClick = () => {
    const ingredientIds = ingredients
      .filter((item) => item.type !== "bun")
      .map((item) => item._id);
    dispatch(createOrder(ingredientIds));
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.contentConteiner}>
        {isLoading ? (
          <p>Ожидается загрузка данных</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <BurgerIngredients />
            <BurgerConstructor
              ingredients={ingredients}
              orderNumber={orderNumber}
              onOrderClick={handleOrderClick}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

