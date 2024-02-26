import { connect, disconnect } from "../../services/feedSlice";
import { useEffect } from "react";
import OrderCardIngredient from "../../components/order-card-ingredient/order-card-ingredient";
import styles from "./order-history.module.css";
import { getCookie } from "../../utils/cookie";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { RootState } from "../../services/store";

function OrderHistory() {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state: RootState) => state.feed);

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

export default OrderHistory;
