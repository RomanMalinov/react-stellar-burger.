import { useEffect, useMemo } from "react";
import {
  connect as connectFeed,
  disconnect as disconnectFeed,
} from "../../services/feedSlice";
import OrderCardIngredient from "../../components/order-card-ingredient/order-card-ingredient";
import styles from "./feed.module.css";
import { useAppDispatch, useAppSelector } from "../../services/store";

function Feed() {
  const dispatch = useAppDispatch();
  const { orders, total, totalToday } = useAppSelector((state) => state.feed);

  const done = useMemo(
    () => orders.filter((item) => item.status === "done").slice(0, 10),
    [orders]
  );
  const activeOrders = useMemo(
    () => orders.filter((item) => item.status !== "done").slice(0, 10),
    [orders]
  );

  useEffect(() => {
    dispatch(connectFeed('wss://norma.nomoreparties.space/orders/all'));
    return () => {
      dispatch(disconnectFeed());
    };
  }, [dispatch]);

  return (
    <section className={`${styles.feedConteiner} `}>
      <div className={`${styles.cardsConteiner} custom-scroll`}>
        <h2 className={`${styles.mainTitle} text text_type_main-large`}>
          Лента заказов
        </h2>
        {orders.map((order) => (
          <OrderCardIngredient orderData={order} key={order._id} />
        ))}
      </div>
      <div className={styles.statsConteiner}>
        <div className={styles.tablesConteiner}>
          <div className={`${styles.listContainer} mr-9`}>
            <h3 className={`${styles.listTitle} text text_type_main-medium`}>
              Готовы:
            </h3>
            <div className={styles.list}>
              {done.map((item) => {
                return (
                  <p
                    key={item.number}
                    className={`${styles.done} text text_type_digits-default`}
                  >
                    {item.number}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={styles.listContainer}>
            <h3 className={`${styles.listTitle} text text_type_main-medium`}>
              В работе:
            </h3>
            <div className={styles.list}>
              {activeOrders.length > 0 ? (
                activeOrders.map((item) => (
                  <p
                    key={item.number}
                    className="text text_type_digits-default"
                  >
                    {item.number}
                  </p>
                ))
              ) : (
                <p className="text text_type_main-medium">Заказы готовы</p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.countConteiner}>
          <h3 className="text text_type_main-medium">
            Выполнено за все время:
          </h3>
          <div className={`${styles.textShadow} text text_type_digits-large`}>
            {total}
          </div>
        </div>
        <div className={`${styles.countConteiner} `}>
          <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
          <div className={`${styles.textShadow} text text_type_digits-large`}>
            {totalToday}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feed;
