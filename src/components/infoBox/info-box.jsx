import React from "react";
import styles from "./info-box.module.css";

function InfoBox({ name }) {
  return (
    <div className={`${styles.conteiner}`}>
      <h3 className={`${styles.tableHeader} text text_type_main-medium mb-6`}>
        {name}
      </h3>
      <ul className={`${styles.title}`}>
        <li
          className={`${styles.text} text text_type_digits-default`}
        >
          weewewewew
        </li>
      </ul>
    </div>
  );
}
export default InfoBox;
