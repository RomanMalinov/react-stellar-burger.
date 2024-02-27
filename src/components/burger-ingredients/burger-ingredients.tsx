import { useState, useRef } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerTab from "./burger-tab";
import Ingredient from "./ingredient";
import IngredientSection from "./ingredient-section";
import { useAppSelector } from "../../services/store";
import { TIngredient } from "../../utils/types";

const BurgerIngredients = () => {
  const ingredients: TIngredient[] = useAppSelector((state) => state.ingredientList.ingredients);
  const isLoading: boolean = useAppSelector((state) => state.ingredientList.isLoading);
  const sortIngredient = listIngredient(ingredients);

  //4. Доработка интерфейса навигации по ингредиентам
  const [selectedTab, setSelectedTab] = useState<string>("Bun");
  const tabsRef = useRef<HTMLDivElement>(null);
  const bunsRef = useRef<HTMLDivElement>(null);
  const saucesRef = useRef<HTMLDivElement>(null);
  const centralRef = useRef<HTMLDivElement>(null);

  const handleScrollIngredients = () => {
    const container = tabsRef.current!;
    const bunsSection = bunsRef.current!;
    const saucesSection = saucesRef.current!;
    const mainSection = centralRef.current!;

    const offset = 100;

    const containerTop = container.offsetTop - offset;
    const bunsTop = bunsSection.offsetTop;
    const saucesTop = saucesSection.offsetTop;
    const mainTop = mainSection.offsetTop;

    const scrollPosition = container.scrollTop + containerTop;

    if (scrollPosition >= bunsTop && scrollPosition < saucesTop) {
      setSelectedTab("Bun");
    } else if (scrollPosition >= saucesTop && scrollPosition < mainTop) {
      setSelectedTab("Sauce");
    } else if (scrollPosition >= mainTop) {
      setSelectedTab("Main");
    }
  };
  //___________________________________________________________

  function listIngredient(data: TIngredient[]) {
    const buns: JSX.Element[] = [];
    const mains: JSX.Element[] = [];
    const sauces: JSX.Element[] = [];

    data.forEach((element) => {
      const ingredientCard = (
        <Ingredient key={element._id} ingredient={element} />
      );
      if (element.type === "main") {
        mains.push(ingredientCard);
      } else if (element.type === "bun") {
        buns.push(ingredientCard);
      } else if (element.type === "sauce") {
        sauces.push(ingredientCard);
      }
    });

    return {
      mains: mains,
      buns: buns,
      sauces: sauces,
    };
  }

  return (
    <section className={styles.ingredientsConteiner}>
      <h2 className={`${styles.ingredientsTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <div>
        <BurgerTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div
        >
          {isLoading && (
            <p className={`${styles.hiddenText} text text_type_main-large`}>
              загрузка
            </p>
          )}
          {!isLoading && ingredients.length === 0 && (
            <p className={`${styles.hiddenText} text text_type_main-large`}>
              Ошибка загрузки
            </p>
          )}
          {!isLoading && ingredients.length > 0 && (
            <div
              ref={tabsRef}
              className={`${styles.scrollContainer} custom-scroll`}
              onScroll={handleScrollIngredients}
            >
              <IngredientSection ref={bunsRef} title="Булки">
                {sortIngredient.buns}
              </IngredientSection>
              <IngredientSection ref={saucesRef} title="Соусы">
                {sortIngredient.sauces}
              </IngredientSection>
              <IngredientSection ref={centralRef} title="Начинки">
                {sortIngredient.mains}
              </IngredientSection>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
