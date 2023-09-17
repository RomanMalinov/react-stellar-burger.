import React, { useState } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import Modal from "../modals/modals";
import IngredientDetails from "../inrredient-details/inrredient-details";

const Ingredient = ({ props }) => {
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
        src={props.image}
        alt={props.name}
        onClick={openModal}
      />
      <div className={styles.priceConteiner} onClick={openModal}>
        <p className={`text text_type_digits-default`}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.imgText} text text_type_main-small`}>
        {props.name}
      </p>
      {isModalOpen && (
        <Modal handleClose={closeModal}>
          <IngredientDetails ingredient={props} />
        </Modal>
      )}
    </section>
  );
};

Ingredient.propTypes = {
  props: ingredientPropType.isRequired,
};

export default Ingredient;
