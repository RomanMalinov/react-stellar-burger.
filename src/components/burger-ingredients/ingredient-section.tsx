import { forwardRef, ReactNode } from "react";
import styles from "./burger-ingredients.module.css";

type TSectionPr = {
  title: string;
  children: ReactNode;
};

const IngredientSection = forwardRef<HTMLDivElement, TSectionPr>(
  ({ title, children }, ref) => {
    return (
      <div ref={ref}>
        <h3 className={`${styles.subTitle} text text_type_main-medium`}>
          {title}
        </h3>
        <ul className={styles.list}>{children}</ul>
      </div>
    );
  });

export default IngredientSection;
