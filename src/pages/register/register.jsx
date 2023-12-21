import Form from "../../components/form/form";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";


function Register() {
  return (
    <div >
      <Form titleForm="Регистрация" buttonText="Зарегистрировать">
        <Input
         placeholder={"Имя"}
         />
         <Input
         placeholder={"E-mail"}
         />
        <Input
         placeholder="Пароль"
         icon={"ShowIcon"}
          />
      </Form>
      <ConteinerLink
        	text="Уже зарегистрированы?"
          textLink="Войти"
          // path={}
      />


    </div>


  );
}

export default Register;
