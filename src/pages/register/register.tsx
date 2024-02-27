import { useState, FormEvent, ChangeEvent } from "react";
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
import { useAppDispatch} from "../../services/store";

type TForm = {
  email: string;
  password: string;
  name: string;
};

const initialState: TForm = {
  email: "",
  password: "",
  name: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleForm = (e: ChangeEvent<HTMLInputElement>) =>
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchRegisterUser(formValue))
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
