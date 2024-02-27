import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card-ingredient.module.css";
import { TOrder, TIngredient } from "../../utils/types";
import { useAppSelector } from "../../services/store";

type TOrderCardIngredientProps = {
  orderData: TOrder;
};

function OrderCardIngredient({ orderData }: TOrderCardIngredientProps) {

  const location = useLocation();
  const { ingredients } = useAppSelector((state) => state.ingredientList);

  const orderIngredients = useMemo(() => {
    return orderData.ingredients
      .map((id) => {
        const ingredient = ingredients.find((item) => item._id === id);
        return ingredient ? { ...ingredient } as TIngredient : null;
      })
      .filter(Boolean);
  }, [orderData.ingredients, ingredients]);

  const url = useMemo(() => {
    return location.pathname === "/feed"
      ? `/feed/${orderData.number}`
      : location.pathname === "/profile/orders"
        ? `/profile/orders/${orderData.number}`
        : "/";
  }, [location, orderData.number]);

  const calculateTotalPrice = useMemo(() => {
    return orderIngredients.reduce((total, ingredient) => {
      return total + (ingredient?.price || 0);
    }, 0);
  }, [orderIngredients]);

  const extraItemsCount = orderIngredients?.slice(6).length;

  return (
    <Link
      className={styles.linkСonteiner}
      to={url}
      state={{ background: location }}
    >
      <div className={styles.cardConteiner}>
        <div className={styles.namberInfo}>
          <p className="text text_type_main-default">#{orderData.number}</p>
          <p>
            <FormattedDate
              date={new Date(orderData.createdAt)}
              className="text_color_inactive text text_type_main-default"
            />
          </p>
        </div>
        <p className="text text_type_main-medium">{orderData.name}</p>
        <div className={styles.orderInfo}>
          <div className={styles.imgConteiner}>
            {orderIngredients.map((item, index) => {
              if (item) {
                if (index < 6) {
                  return (
                    <div key={index}>
                      <img className={styles.img} src={item.image} alt="img" />
                      {index === 5 && extraItemsCount !== 0 && (
                        <div className={styles.counter}>
                          <p className="text text_type_digits-default">{`+${extraItemsCount}`}</p>
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              }
            })}
          </div>
          <div className={styles.conteinerPrice}>
            <p className="text text_type_digits-medium">
              {calculateTotalPrice}
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default OrderCardIngredient;

