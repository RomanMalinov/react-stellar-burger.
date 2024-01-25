import styles from "./profile-orders.module.css"
import OrderCards from "../../components/order-cards/order-cards"

export default function ProfileOrders() {
  return (
    <section  className={styles.container}>
      <OrderCards />
    </section>
  )
}
