import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

type TBurgerTabProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const BurgerTab = ({ selectedTab, setSelectedTab }: TBurgerTabProps) => {
  const handleTabClick = (tab: string) => {
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


export default BurgerTab;
