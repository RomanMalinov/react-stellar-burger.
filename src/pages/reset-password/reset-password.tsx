import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./reset-password.module.css";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchResetPassword } from "../../services/authSlice";
import { useAppDispatch } from "../../services/store";

type TFormResetPassword = {
  token: string;
  password: string;
};

const initialState: TFormResetPassword = {
  token: "",
  password: "",
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [formValue, setFormValue] = useState(initialState);
  const [error, setError] = useState(false);
  const reset = location.state?.reset;

  useEffect(() => {
    if (!reset) {
      navigate("/forgotpassword");
    }
  }, [reset, navigate]);

  const handleFormUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchResetPassword(formValue)).then((data: any) => {
      if (data?.payload?.success) {
        navigate("/login");
      } else {
        setError(true);
      }
    });
  };

  return (
    <div className={styles.mainConteiner}>
      <h2 className={`${styles.title} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form onSubmit={handleFormSubmit} className={styles.formConteiner}>
        <PasswordInput
          placeholder="Введите новый пароль"
          onChange={handleFormUpdate}
          value={formValue.password}
          name="password"
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={handleFormUpdate}
          value={formValue.token}
          name="token"
          error={error}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <ConteinerLink
        text="Вспомнили пароль?"
        path={"/login"}
        textLink="Войти"
      />
    </div>
  );
};

export default ResetPassword;
