import Form from "../../components/form/form";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className={`${styles.main} pl-10`}>
      <nav className={styles.navLinks}>
        <p className="text text_type_main-medium pt-4 pb-4">
          <Link to={""} className={`${styles.link} text_color_primary`}>
            Профиль
          </Link>
        </p>
        {/* доделать переключение активности у сслылок и маршруты */}
        <p className="text text_type_main-medium pt-4 pb-4 ">
          <Link to={""} className={`${styles.link}  text_color_inactive`}>
            История заказов
          </Link>
        </p>
        <p className="text text_type_main-medium pt-4 pb-4 ">
          <Link to={""} className={`${styles.link} text_color_inactive`}>
            Выход
          </Link>
        </p>
        <p className="mt-20 pt-1 text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>

      <div className={styles.conteiner}>
        <form className={styles.form}>
          <Input
            icon={"EditIcon"}
            placeholder={"Имя"}
            type={"text"}
            // value={valueName}
            name={"name"}

          />
          <Input
            icon={"EditIcon"}
            placeholder={"Логин"}
            type={"text"}
            // value={valueLogin}
            name={"name"}
          />
          <Input
            icon={"EditIcon"}
            placeholder={"Пароль"}
            type={"email"}
            // value={valuePassword}
            name={"text"}
            />
        </form>
      </div>
    </main>
  );
}

export default Profile;
