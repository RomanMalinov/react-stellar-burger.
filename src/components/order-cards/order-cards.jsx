import styles from "./order-cards.module.css";
import OrderCardIngredient from "../order-card-ingredient/order-card-ingredient";

function OrderCards() {
  return (
    <section className={`${styles.container} custom-scroll`}>
    <OrderCardIngredient />
    <OrderCardIngredient />
    <OrderCardIngredient />
    <OrderCardIngredient />
    <OrderCardIngredient />
    <OrderCardIngredient />
    </section>
  )
}
export default OrderCards;
