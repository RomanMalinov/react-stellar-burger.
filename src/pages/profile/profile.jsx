import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
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

      <div className={styles.form}>
        <form className={styles.formConteiner}>
          <Input icon="EditIcon" placeholder="Имя" name={"name"} />
          <EmailInput placeholder="Логин" name={"email"} isIcon={true} />
          <PasswordInput
            placeholder="Пароль"
            name={"password"}
            icon="EditIcon"
          />
          <div className={styles.buttons}>
            {/* <Button htmlType="button" type="secondary" size="medium">
              Отменить
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button> */}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
