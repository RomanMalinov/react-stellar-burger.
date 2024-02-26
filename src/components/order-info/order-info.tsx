import { useEffect, useMemo } from "react";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import styles from "./order-info.module.css";
import { fetchSelectedOrderData } from "../../services/orderDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { TIngredient } from "../../utils/types";
import { RootState } from "../../services/store";

function OrderInfo() {
  const dispatch = useAppDispatch();
  const { number } = useParams();
  const { ingredients } = useAppSelector((state: RootState) => state.ingredientList);

  useEffect(() => {
    if (number) {
      dispatch(fetchSelectedOrderData(number));
    }
  }, [dispatch, number]);

  const order = useAppSelector((state: RootState) => {
    if (number) {
      const orderNumber = parseInt(number, 10);
      let order = state.feed.orders.find((order) => parseInt(order.number, 10) === orderNumber);
      if (!order) {
        order = state.orderDetails.selectedOrder?.orders[0];
      }
      return order;
    }
  });

  const orderIngredients = useMemo(() => {
    if (order) {
      return order.ingredients.map((id: string) => {
        return ingredients.find((item: TIngredient) => item._id === id);
      });
    }
    return [];
  }, [order, ingredients]);

  const combinedIngredients = useMemo(() => {
    const uniqueItemsList: TIngredient[] = [];
    if (orderIngredients) {
      orderIngredients.forEach((item) => {
        const ingredients = orderIngredients.filter((ing) => ing?._id === item?._id);
        if (!uniqueItemsList.find((i) => i._id === item?._id)) {
          if (ingredients[0] !== undefined) {
            uniqueItemsList.push({ ...ingredients[0], count: ingredients.length });
          }
        }
      });
    }
    return uniqueItemsList;
  }, [orderIngredients]);

  const total = useMemo(() => {
    if (orderIngredients) {
      return orderIngredients.reduce((acc, p) => {
        return p ? acc + p.price : 0
      }, 0)
    }
  }, [orderIngredients]);

  if (!order) {
    return null
  };

  return (
    <section className={styles.conteiner}>
      <p className={`${styles.orderNumber} text text_type_digits-default`}>
        #{order.number}
      </p>
      <p className={`${styles.name} text text_type_main-medium`}>
        {order.name}
      </p>
      <p
        className={`${order.status === "done" ? styles.done : ""
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
                <CurrencyIcon type='primary' />
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
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </section>
  );
}


export default OrderInfo;
