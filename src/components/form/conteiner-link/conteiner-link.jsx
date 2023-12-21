import styles from "./conteiner-link.module.css";
import { Link } from "react-router-dom";

function ConteinerLink({ text, textLink, path }) {
  return (
    <div className={styles.textConteiner}>
      <p className="text text_type_main-default text_color_inactive">
        {text}
      </p>
      <Link className={styles.link} to={path}><p className="text text_type_main-small">{textLink}</p></Link>
    </div>
  );
}

export default ConteinerLink;
