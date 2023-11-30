import { useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import { useSelector, useDispatch } from "react-redux";
import { removeIngredient } from "../../services/constructorIngedientSlice";

const ListInternalElements = ({ data }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = (id) => {
    dispatch(removeIngredient({ id }));
  };

  return data.map((item) => {
    return (
      <li key={item.key} className={styles.item}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={() => handleRemoveClick(item.key)}
        />
      </li>
    );
  });
};

ListInternalElements.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default ListInternalElements;
