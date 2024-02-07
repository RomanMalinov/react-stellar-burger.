import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import styles from "./order-info.module.css";
import PropTypes from "prop-types";
import { fetchSelectedOrderData } from "../../services/orderDetailsSlice";

function OrderInfo() {
  const dispatch = useDispatch();
  const { number } = useParams();
  const { ingredients } = useSelector((state) => state.ingredientList);

  useEffect(() => {
    if (!order) {
      dispatch(fetchSelectedOrderData(number));
    }
  }, []);

  const order = useSelector((state) => {
    let order = state.feed.orders.find(
      (order) => order.number === parseInt(number)
    );
    if (order) {
      return order;
    }
    order = state.profileOrders.orders.find(
      (order) => order.number === parseInt(number)
    );
    if (order) {
      return order;
    }
    return state.orderDetails.selectedOrder?.orders[0];
  });

  const orderIngredients = useMemo(() => {
    if (order) {
      return order.ingredients.map((id) => {
        return ingredients.find((item) => item._id === id);
      });
    }
  }, [order, ingredients]);

  const combinedIngredients = useMemo(() => {
    const uniqueItemsList = [];
    if (orderIngredients) {
      orderIngredients.map((item) => {
        const ingredients = orderIngredients.filter(
          (ing) => ing._id === item._id
        );
        if (
          uniqueItemsList.lenght ||
          !uniqueItemsList.find((i) => i._id === item._id)
        ) {
          uniqueItemsList.push({
            ...ingredients[0],
            count: ingredients.length,
          });
        }
        return uniqueItemsList;
      });
    }

    return uniqueItemsList;
  }, [orderIngredients]);

  const total = useMemo(() => {
    if (orderIngredients) {
      return orderIngredients.reduce((acc, p) => acc + p.price, 0);
    }
  }, [orderIngredients]);

  if (!order) {
    return <div>загрузка</div>;
  }

  return (
    <section className={styles.conteiner}>
      <p className={`${styles.orderNumber} text text_type_digits-default`}>
        #{order.number}
      </p>
      <p className={`${styles.name} text text_type_main-medium`}>
        {order.name}
      </p>
      <p
        className={`${
          order.status === "done" ? styles.done : ""
        } text text_type_main-default`}
      >
        {order.status === "done" ? "Выполнен" : "Готовится"}
      </p>
      <p className={`${styles.title} text text_type_main-medium`}>Состав:</p>
      <ul className={`${styles.listIngredients} custom-scroll`}>
        {combinedIngredients.map((item) => {
          return (
            <div className={styles.ingredient} key={item._id}>
              <div className={styles.ingredientInfo}>
                <img className={styles.img} src={item.image} alt={item.name} />
                <p
                  className={`${styles.ingredientText} text text_type_main-default`}
                >
                  {item.name}
                </p>
              </div>
              <div className={styles.countConteiner}>
                <p className="text text_type_digits-default">{`${item.count} x ${item.price}`}</p>
                <CurrencyIcon />
              </div>
            </div>
          );
        })}
      </ul>
      <div className={styles.info}>
        <FormattedDate
          date={new Date(order.createdAt)}
          className="text text_type_main-default text_color_inactive"
        />
        <div className={styles.infoCount}>
          <p className="text text_type_digits-default">{total}</p>
          <CurrencyIcon />
        </div>
      </div>
    </section>
  );
}
OrderInfo.propTypes = {
  order: PropTypes.shape({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
};

export default OrderInfo;
