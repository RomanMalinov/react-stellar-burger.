
import { Link } from "react-router-dom";
import styles from "./not-found-page.module.css"; // Подключаем стили

export default function Notfoundpage() {
  return (
    <>
            <title>Page Not Found</title>
      <img className={styles.image} src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" alt="Softcodeon" />
      <h1 className={styles.errorText}>Whoops, We can't seem to find the resource you're looking for.</h1>
      {/* <p className={styles.text}>
        Please check that the Web site address is spelled correctly. Or,
      </p> */}
      <div className={styles.btn1}>
        <Link to="/" className={styles.error} >GO BACK HOME</Link>
      </div>
    </>
  );
}
