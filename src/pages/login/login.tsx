import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchLoginUser } from "../../services/authSlice";
import { useAppDispatch } from "../../services/store";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchLoginUser({ email, password }));
    navigate("/");
  };
  return (
    <>
      <div className={styles.mainConteiner}>
        <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
        <form className={styles.formConteiner} onSubmit={handleLogin}>
          <EmailInput
            name="emailLogin"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            name="passwordLogin"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button size="medium" type="primary" htmlType="submit">
            Войти
          </Button>
        </form>
      </div>
      <ConteinerLink
        path={"/register"}
        text="Вы — новый пользователь?"
        textLink="Зарегистрироваться"
      />
      <ConteinerLink
        path={"/forgotPassword"}
        text="Забыли пароль?"
        textLink="Восстановить пароль"
      />
    </>
  );
}

export default Login;
