import { useContext } from "react";
import styles from "./order-details.module.css";
import { OrderContext } from "../../services/context";
const OrderDetails = () => {
  const { orderNumber } = useContext(OrderContext);
  return (
    <section className={`${styles.conteiner}`}>
      <h3 className={`${styles.id} text text_type_digits-large`}>
        {orderNumber}
      </h3>
      <p className={`${styles.title} text text_type_main-medium`}>
        идентификатор заказа
      </p>
      <div className={`${styles.img}`}></div>
      <p className={`${styles.textOrder} text text_type_main-smal`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${styles.textTime} text text_type_main-default text_color_inactive`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
};

export default OrderDetails;
