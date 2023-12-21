import Form from "../../components/form/form";
import ConteinerLink from "../../components/form/conteiner-link/conteiner-link";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";


function FogotPassword() {
  return (
    <div >
      <Form titleForm="Восстановление пароля" buttonText="Восстановить">
        <Input
         placeholder={"Укажите e-mail"}
         />
      </Form>
      <ConteinerLink
        	text="Вспомнили пароль?"
          textLink="Войти"
          // path={}
      />


    </div>


  );
}

export default FogotPassword;
