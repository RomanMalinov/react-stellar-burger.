import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/api";
import { fetchIngredientList } from "../../services/ingredientListSlice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredientList());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styles.contentConteiner}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
