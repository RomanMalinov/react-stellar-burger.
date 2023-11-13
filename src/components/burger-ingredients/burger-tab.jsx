import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerTab = ({ setSelectedTab, current }) => {
  return (
    <div className={styles.tab}>
      <Tab
        value="bun"
        active={current === "bun"}
        onClick={() => setSelectedTab('bun')}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={current === "sauce"}
        onClick={() => setSelectedTab('sauce')}
      >
        Соусы
      </Tab>
      <Tab
        value="main"
        active={current === "main"}
        onClick={() => setSelectedTab('main')}
      >
        Начинки
      </Tab>
    </div>
  );
};

export default BurgerTab;
