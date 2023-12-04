import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import Element from "./element";
import { removeIngredient } from "../../services/constructorIngedientSlice";
import { moveProduct } from "../../services/constructorIngedientSlice";

const ListInternalElements = ({ data, ingredients }) => {
  const dispatch = useDispatch();

  const moveElement = useCallback(
    ({ dragIndex, hoverIndex }) => {
      dispatch(moveProduct({ dragIndex, hoverIndex }));
    },
    [dispatch]
  );

  return (
    <ul className={styles.list}>
      {data.map((item, index) => (
        <Element
          key={item.key}
          index={index}
          item={item}
          onRemove={() => dispatch(removeIngredient({ id: item.key }))}
          moveElement={moveElement}
        />
      ))}
    </ul>
  );
};

ListInternalElements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  ingredients: PropTypes.array.isRequired,
};
export default ListInternalElements;
