import Form from "../../components/form/form";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";

function ResetPassword() {
  return (
    <div className={styles.conteiner}>
      <Form titleForm="Восстановление пароля" buttonText="Сохранить">
        <Input
         icon={"ShowIcon"}
         placeholder={"Введите новый пароль"}
         />
        <Input
         placeholder="Введите код из письма"
          />
      </Form>
      <ConteinerLink
        	text="Вспомнили пароль?"
          textLink="Войти"
            // path={}

      />


    </div>


  );
}

export default ResetPassword;
