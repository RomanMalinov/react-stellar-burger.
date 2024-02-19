import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./profile-form.module.css";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchUpdateUser, getUser } from "../../services/authSlice";
import { TUserData } from "../../utils/types";

// type TUserData = {
//   name: string;
//   email: string;
//   password: string;
// }

function ProfileForm() {
  const dispatch = useDispatch();
  const userData = useSelector(getUser);

  const [formData, setFormData] = useState<TUserData>({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({
      name: userData.name || "",
      email: userData.email || "",
      password: userData.password || "",
    });
  }, [userData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchUpdateUser(formData));
  };

  const canсelChanges = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.form}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <Input
          icon="EditIcon"
          placeholder="Имя"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <EmailInput
          placeholder="Логин"
          name="email"
          isIcon={true}
          value={formData.email}
          onChange={handleChange}
        />
        <PasswordInput
          placeholder="Пароль"
          name="password"
          icon="EditIcon"
          value={formData.password}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <Button
            onClick={canсelChanges}
            htmlType="button"
            type="secondary"
            size="medium"
          >
            Отменить
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
