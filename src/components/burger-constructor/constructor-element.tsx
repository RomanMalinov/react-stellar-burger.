import { useCallback } from "react";
import styles from "./burger-constructor.module.css";
import Element from "./element";
import { removeIngredient } from "../../services/constructorIngedientSlice";
import { moveProduct } from "../../services/constructorIngedientSlice";
import { TIngredient } from "../../utils/types";
import { useAppDispatch } from "../../services/store";

type TListInternalElementsProps = {
  data: TIngredient[];
};

const ListInternalElements = ({ data }: TListInternalElementsProps) => {
  const dispatch = useAppDispatch();

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
          onRemove={() => dispatch(removeIngredient({ id: item.key! }))}
          moveElement={moveElement}
        />
      ))}
    </ul>
  );
};

export default ListInternalElements;
