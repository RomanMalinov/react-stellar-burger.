import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

const BurgerTab = ({ selectedTab, setSelectedTab }) => {
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.tab}>
      <Tab
        value="Bun"
        active={selectedTab === "Bun"}
        onClick={() => handleTabClick("Bun")}
      >
        Булки
      </Tab>
      <Tab
        value="Sauce"
        active={selectedTab === "Sauce"}
        onClick={() => handleTabClick("Sauce")}
      >
        Соусы
      </Tab>
      <Tab
        value="Main"
        active={selectedTab === "Main"}
        onClick={() => handleTabClick("Main")}
      >
        Начинки
      </Tab>
    </div>
  );
};

BurgerTab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default BurgerTab;
