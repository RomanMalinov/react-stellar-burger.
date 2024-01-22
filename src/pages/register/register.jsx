import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import { fetchRegisterUser } from "../../services/authSlice";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";

const initialState = {
  email: "",
  password: "",
  name: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForm = (e) =>
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRegisterUser(formValue))
      .then((result) => {
        if (result.payload && result.payload.success) {
          navigate("/");
        } else {
          console.error(
            "Регистрация не удалась",
            result.payload ? result.payload.error : "Неизвестная ошибка"
          );
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка при выполнении запроса", error);
      });
  };

  return (
    <div className={styles.mainConteiner}>
      <h2 className={`${styles.title} text text_type_main-medium`}>
        Регистрация
      </h2>
      <form className={styles.formConteiner} onSubmit={handleFormSubmit}>
        <Input
          name="name"
          value={formValue.name}
          onChange={handleForm}
          placeholder="Имя"
        />
        <EmailInput
          name="email"
          value={formValue.email}
          onChange={handleForm}
          placeholder="E-mail"
        />
        <PasswordInput
          name="password"
          value={formValue.password}
          onChange={handleForm}
          placeholder="Пароль"
        />
        <Button size="medium" type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </form>
      <ConteinerLink
        path={"/login"}
        text="Уже зарегистрированы?"
        textLink="Войти"
        onClick={handleLogin}
      />
    </div>
  );
};

export default Register;
