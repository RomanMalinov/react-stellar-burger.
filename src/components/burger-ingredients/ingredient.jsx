import { useState } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import ingredientPropType from "../../utils/prop-types";
import Modal from "../modals/modals";
import IngredientDetails from "../inrredient-details/inredient-details";
import { IngredientsContext } from "../../services/context";

const Ingredient = ({ ingredient }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.IngregientConteiner}>
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
