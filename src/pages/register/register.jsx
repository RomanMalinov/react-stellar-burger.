import styles from "./register.module.css";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Register() {
  return (
    <div className={styles.mainConteiner}>
      <h2 className={`${styles.title} text text_type_main-medium`}>
        Регистрация
      </h2>
      <form className={styles.formConteiner}>
        <Input name={"nameRegister"} placeholder="Имя" />
        <EmailInput name={"emaiRegister"} placeholder="E-mail" />
        <PasswordInput name={"passwordRegister"} placeholder="Пароль" />
        <Button size="medium" type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </form>
      <ConteinerLink text="Уже зарегистрированы?" textLink="Войти" />
    </div>
  );
}

export default Register;

// import Form from "../../components/form/form";
// import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
// import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

// function Register() {
//   return (
//     <div >
//       <Form titleForm="Регистрация" buttonText="Зарегистрировать">
//         <Input
//          placeholder={"Имя"}
//          />
//          <Input
//          placeholder={"E-mail"}
//          />
//         <Input
//          placeholder="Пароль"
//          icon={"ShowIcon"}
//           />
//       </Form>
//       <ConteinerLink
//         	text="Уже зарегистрированы?"
//           textLink="Войти"
//           // path={}
//       />

//     </div>

//   );
// }

// export default Register;
