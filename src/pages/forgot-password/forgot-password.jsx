import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./forgot-password.module.css";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import { useDispatch, useSelector } from "react-redux";
import { fetchPasswordReset } from "../../services/authSlice";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function FogotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    dispatch(fetchPasswordReset({ email })).then((data) => {
      if (data?.payload?.success) {
        navigate("/resetpassword", { state: { reset: true } });
      }
    });
  };

  return (
    <div className={styles.mainConteiner}>
      <h2 className={`${styles.title} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form className={styles.formConteiner} onSubmit={handleSubmit}>
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="emailForPassword"
          placeholder="Укажите e-mail"
        />
        <Button size="medium" type="primary" htmlType="submit">
          Восстановить
        </Button>
      </form>
      <ConteinerLink path={"/login"} text="Вспомнили пароль?" textLink="Войти" />
    </div>
  );
}

export default FogotPassword;
