import styles from "./login.module.css";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
function Login() {
  return (
<>
<div className={styles.mainConteiner}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
      <form className={styles.formConteiner}>
        <EmailInput name={"emailLogin"} placeholder="E-mail" />
        <PasswordInput name={"passwordLogin"} placeholder="Пароль" />
        <Button size="medium" type="primary" htmlType="submit">
          Войти
        </Button>
      </form>

    </div>
          <ConteinerLink text="Вы — новый пользователь?" textLink="Зарегистрироваться" />
          <ConteinerLink text="Забыли пароль?"  textLink="Восстановить пароль"/>
</>
  );
}

export default Login;

// import Form from "../../components/form/form";
// import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
// import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

// function Login() {
//   return (
//     <div>
//       <Form titleForm="Вход" buttonText="Войти">
//         <Input
//          placeholder={"E-mail"}
//          />
//         <Input
//          placeholder="Пароль"
//          icon={"ShowIcon"}
//           />
//       </Form>
//       <ConteinerLink
//         	text="Вы — новый пользователь?"
//           textLink="Зарегистрироваться"
//           // path={}
//       />
//          <ConteinerLink
//         	text="Забыли пароль??"
//           textLink="Восстановить пароль"
//           // path={}
//       />

//     </div>

//   );
// }

// export default Login;
