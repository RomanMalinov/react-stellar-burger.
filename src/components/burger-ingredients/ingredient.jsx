import { useState } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import ingredientPropType from "../../utils/prop-types";
import Modal from "../modals/modals";
import IngredientDetails from "../inrredient-details/inredient-details";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentInformationIngredient, removeCurrentInformationIngredient } from "../../services/ingredientDetailsSlice";
import { useDrag } from "react-dnd";



const Ingredient = ({ ingredient }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    dispatch(setCurrentInformationIngredient({ingredient}));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    dispatch(removeCurrentInformationIngredient({ingredient}))
    setIsModalOpen(false);
  };


  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: {...ingredient},
  	collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		})
  })

  return (
    <section className={styles.IngregientConteiner} ref={dragRef}>
      <Counter count={1} size="default" className="counter" />
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
  ingredient: ingredientPropType.isRequired,
};

export default Ingredient;
