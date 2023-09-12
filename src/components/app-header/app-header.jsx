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
        <a className={styles.link}>
          <BurgerIcon type="primary" />
          <span className={styles.text}>Конструктор</span>
        </a>
        <a className={styles.link}>
          <ListIcon type="secondary" />
          <span className={styles.text}>Лента заказов</span>
        </a>
      </nav>
      <Logo className={styles.logo} />
      <a className={styles.link}>
        <ProfileIcon type="secondary" />
        <span className={styles.text}>Личный кабинет</span>
      </a>
    </header>
  );
};
export default AppHeader;

//(navMenu)
// (NavBar)
