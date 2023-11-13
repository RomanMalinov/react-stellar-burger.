import React, { useState, useEffect } from "react";
import BurgerTab from "./burger-tab";
import BurgerList from "./burger-list";
import styles from "./burger-ingredients.module.css";

const BurgerIngredients = () => {
  const [selectedTab, setSelectedTab] = useState('bun');

  useEffect(() => {
    const handleScroll = () => {
      const bunsPosition = document.getElementById("buns-section").getBoundingClientRect();
      const saucesPosition = document.getElementById("sauces-section").getBoundingClientRect();
      const mainsPosition = document.getElementById("mains-section").getBoundingClientRect();

      if (bunsPosition.top < 0 && saucesPosition.top > 0) {
        setSelectedTab('bun');
      } else if (saucesPosition.top < 0 && mainsPosition.top > 0) {
        setSelectedTab('sauce');
      } else if (mainsPosition.top < 0) {
        setSelectedTab('main');
      }
    };

    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <section className={`${styles.ingredientsContainer} custom-scroll`}>
      <h2 className={`${styles.ingredientsTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>

      <BurgerTab setSelectedTab={setSelectedTab} current={selectedTab} />

      <section className={`${styles.scrollContainer} custom-scroll`}>
        <div id="buns-section"></div>
        <BurgerList type="bun" />
        <div id="sauces-section">
          <BurgerList type="sauce" />
        </div>
        <div id="mains-section">
          <BurgerList type="main" />
        </div>
      </section>
    </section>
  );
};

export default BurgerIngredients;
