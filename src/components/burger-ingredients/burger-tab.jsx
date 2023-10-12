import React, { useState, useEffect, useRef } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

const BurgerTab = () => {
  const [current, setCurrent] = useState("one");

  const handleScrollToBuns = () => {
    document
      .getElementById("buns-section")
      .scrollIntoView({ behavior: "smooth" });
    setCurrent("bun");
  };

  const handleScrollToSauces = () => {
    document
      .getElementById("sauces-section")
      .scrollIntoView({ behavior: "smooth" });
    setCurrent("sauce");
  };

  const handleScrollToMains = () => {
    document
      .getElementById("mains-section")
      .scrollIntoView({ behavior: "smooth" });
    setCurrent("main");
  };

  return (
    <div className={styles.tab}>
      <Tab value="bun" active={current === "bun"} onClick={handleScrollToBuns}>
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={current === "sauce"}
        onClick={handleScrollToSauces}
      >
        Соусы
      </Tab>
      <Tab
        value="main"
        active={current === "main"}
        onClick={handleScrollToMains}
      >
        Начинки
      </Tab>
    </div>
  );
};

export default BurgerTab;
