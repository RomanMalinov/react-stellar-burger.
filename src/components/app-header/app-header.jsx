import React from "react";
import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={`${styles.link} text text_type_main-small`}>
          <BurgerIcon type="primary" />
          <span className={styles.text}>Конструктор</span>
        </a>
        <a className={`${styles.link} text text_type_main-small`}>
          <ListIcon type="secondary" />
          <span className={styles.text}>Лента заказов</span>
        </a>
      </nav>
      <Logo className={styles.logo} />
      <a className={styles.link}>
        <ProfileIcon type="secondary" />
        <span className={`${styles.text} text text_type_main-small`}>Личный кабинет</span>
      </a>
    </header>
  );
};
export default AppHeader;

//(navMenu)
// (NavBar)
