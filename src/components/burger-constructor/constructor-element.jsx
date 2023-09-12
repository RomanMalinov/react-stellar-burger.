import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";

const ListInternalElements = ({ data }) => {
  return data.map((item) => {
    return (
      <li key={item._id} className={styles.item}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </li>
    );
  });
};

ListInternalElements.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
  };

export default ListInternalElements;
