import styles from "./forgot-password.module.css";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function FogotPassword() {
  return (
    <div className={styles.mainConteiner}>
      <h2 className={`${styles.title} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form className={styles.formConteiner}>
        <EmailInput name={"emailForPassword"} placeholder="Укажите e-mail" />
        <Button size="medium" type="primary" htmlType="submit">
          Восстановить
        </Button>
      </form>
      <ConteinerLink text="Вспомнили пароль?" textLink="Войти" />
    </div>
  );
}

export default FogotPassword;

// import Form from "../../components/form/form";
// import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
// import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

// function FogotPassword() {
//   return (
//     <div >
//       <Form name={''} titleForm="Восстановление пароля" buttonText="Восстановить">
//         <Input
//          placeholder={"Укажите e-mail"}
//         //  value={emaiValue}
//         type={"email"}
//         name={'email'}
//          />
//       </Form>
//       <ConteinerLink
//         	text="Вспомнили пароль?"
//           textLink="Войти"
//           // path={}

//       />

//     </div>

//   );
// }

// export default FogotPassword;
