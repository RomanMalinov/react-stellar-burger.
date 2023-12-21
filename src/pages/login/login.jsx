import Form from "../../components/form/form";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";


function Login() {
  return (
    <div>
      <Form titleForm="Вход" buttonText="Войти">
        <Input
         placeholder={"E-mail"}
         />
        <Input
         placeholder="Пароль"
         icon={"ShowIcon"}
          />
      </Form>
      <ConteinerLink
        	text="Вы — новый пользователь?"
          textLink="Зарегистрироваться"
          // path={}
      />
         <ConteinerLink
        	text="Забыли пароль??"
          textLink="Восстановить пароль"
          // path={}
      />


    </div>


  );
}

export default Login;
