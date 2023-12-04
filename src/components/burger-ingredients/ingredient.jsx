import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import Modal from "../modals/modals";
import IngredientDetails from "../inrredient-details/inredient-details";
import {
  setCurrentInformationIngredient,
  removeCurrentInformationIngredient,
} from "../../services/ingredientDetailsSlice";

const Ingredient = ({ ingredient }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const count = useSelector(
    (state) => state.constructorIngedient.ingredientCounts[ingredient._id] || 0
  );

  const openModal = () => {
    dispatch(setCurrentInformationIngredient({ ingredient }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    dispatch(removeCurrentInformationIngredient({ ingredient }));
    setIsModalOpen(false);
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <section className={styles.IngregientConteiner} ref={dragRef}>
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
      {isModalOpen && (
        <Modal handleClose={closeModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </section>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Ingredient;
