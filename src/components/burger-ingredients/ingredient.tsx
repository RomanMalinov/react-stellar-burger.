import { useState } from "react";
import { useDrag } from "react-dnd";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import {
  setCurrentInformationIngredient,
} from "../../services/ingredientDetailsSlice";
import {
  useLocation,
  Link,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { TIngredient } from "../../utils/types";

type TIngredientProps = {
  ingredient: TIngredient;
};

const Ingredient = ({ ingredient }: TIngredientProps) => {
  const location = useLocation();
  const ingredientId = ingredient["_id"];

  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const count = useAppSelector(
    (state) => state.constructorIngedient.ingredientCounts[ingredient._id] || 0
  );

  const openModal = () => {
    dispatch(setCurrentInformationIngredient({ ingredient }));
    setIsModalOpen(true);
  };

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Link
      className={styles.IngregientConteiner}
      key={ingredientId}
      to={`/ingredients/${ingredientId}`}
      state={{ background: location }}
      ref={dragRef}
    >
      {count > 0 && <Counter count={count} size="default" />}
      <img
        className={styles.img}
        src={ingredient.image}
        alt={ingredient.name}
        onClick={openModal}
      />
      <div className={styles.priceConteiner} onClick={openModal}>
        <p className={`text text_type_digits-default`}>{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.imgText} text text_type_main-small`}>
        {ingredient.name}
      </p>

    </Link>
  );
};

export default Ingredient;
