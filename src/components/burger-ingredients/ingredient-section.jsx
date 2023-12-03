import { forwardRef } from "react";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

const IngredientSection = forwardRef(({ title, children }, ref) => {
  return (
    <div ref={ref}>
      <h3 className={`${styles.subTitle} text text_type_main-medium`}>
        {title}
      </h3>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
});

IngredientSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default IngredientSection;
