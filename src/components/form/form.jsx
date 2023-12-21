import styles from "./form.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function Form({ titleForm, children , buttonText }) {
  return (
    <form className={styles.formConteiner}>
      <p className="text text_type_main-medium">{titleForm}</p>
      {children}
      <Button size="medium" type="primary" htmlType="submit">
        {buttonText}
      </Button>
    </form>
  );
}

export default Form;
