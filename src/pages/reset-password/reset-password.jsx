import styles from "./reset-password.module.css";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function ResetPassword() {
  return (
    <div className={styles.mainConteiner}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h2>
      <form className={styles.formConteiner} >
        <PasswordInput name={'resetPassword'} placeholder="Введите новый пароль"/>
        <Input name={'code'} placeholder="Введите новый пароль"/>
        <Button size="medium" type="primary" htmlType="submit">Сохранить</Button>
      </form>
      <ConteinerLink text="Вспомнили пароль?"  textLink="Войти"/>
    </div>

  );
}

export default ResetPassword;

// import Form from "../../components/form/form";
// import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
// import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
// import styles from "./reset-password.module.css";

// function ResetPassword() {
//   return (
//     <div className={styles.conteiner}>
//       <Form titleForm="Восстановление пароля" buttonText="Сохранить">
//         <Input
//          icon={"ShowIcon"}
//          placeholder={"Введите новый пароль"}
//          />
//         <Input
//          placeholder="Введите код из письма"
//           />
//       </Form>
//       <ConteinerLink
//         	text="Вспомнили пароль?"
//           textLink="Войти"
//             // path={}

//       />

//     </div>

//   );
// }

// export default ResetPassword;
