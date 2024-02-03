import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../../services/profileOrderSlice.js";
import { useEffect } from "react";
import OrderCardIngredient from "../../components/order-card-ingredient/order-card-ingredient";
import styles from "./order-history.module.css";
import { getCookie } from "../../utils/cookie";


export default function OrderHistory() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.profileOrders);

  useEffect(() => {
    dispatch(
      connect(
        `wss://norma.nomoreparties.space/orders?token=${getCookie(
          "accessToken"
        )}`
      )
    );

    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  return (
    <div className={`${styles.orders} custom-scroll p-2`}>
      {orders.map((order) => (
        <OrderCardIngredient orderData={order} key={order._id} />
      ))}
    </div>
  );
}
