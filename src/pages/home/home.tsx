import styles from "./home.module.css";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
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
