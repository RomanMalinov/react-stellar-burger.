import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";
// import AppHeader from "../app-header/app-header";

import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";

import { getIngredients } from "../../utils/api";
import { fetchIngredientList } from "../../services/ingredientListSlice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


 const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredientList());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <DndProvider backend={HTML5Backend}>
        <main className={styles.contentConteiner}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}

export default Home;



