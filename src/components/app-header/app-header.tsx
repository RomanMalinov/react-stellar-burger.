import { NavLink, useLocation } from "react-router-dom";
import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.conteiner}>
        <nav className={styles.nav}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.headerActive : ""}`
            }
          >
            <BurgerIcon
              type={location.pathname === "/" ? "primary" : "secondary"}
            ></BurgerIcon>
            <p className="text text_type_main-default">Конструктор</p>
          </NavLink>
          <NavLink
            to={"/feed"}
            className={({ isActive }) =>
              `${styles.link} text text_type_main-small ${
                isActive ? styles.headerActive : ""
              }`
            }
          >
            <ListIcon
              type={location.pathname === "/order" ? "primary" : "secondary"}
            />
            <p className="text text_type_main-default">Лента заказов</p>
          </NavLink>
        </nav>
        <NavLink className={styles.logo} to={"/"}>
          <Logo />
        </NavLink>
      </div>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          `${styles.link} text text_type_main-small ${
            isActive ? styles.headerActive : ""
          }`
        }
      >
        <ProfileIcon
          type={location.pathname === "/profile" ? "primary" : "secondary"}
        />
        <p className="text text_type_main-default">Личный кабинет</p>
      </NavLink>
    </header>
  );
};
export default AppHeader;
