import styles from "./feed.module.css";
import OrderCards from "../../components/order-cards/order-cards";
import InfoBox from "../../components/infoBox/info-box";

function Feed() {
  return (
    <section className={styles.feed}>
      <h2 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
        Лента заказов
      </h2>
      <div className={styles.mainConteiner}>
        <OrderCards />

        <div className={`${styles.sectionInfo}`}>
          <div className={`${styles.ordersInfo}`}>
               <InfoBox name={"Готовы:"}/>
               <InfoBox  name={"В работе:"}/>
          </div>
            <h3 className={`${styles.title} text text_type_main-medium mt-15`}>Выполнено за все время:</h3>
            <p className={`${styles.sum} text text_type_digits-large`}>455444</p>
            <h3 className={`${styles.title} text text_type_main-medium mt-15`}>Выполнено за сегодня:</h3>
            <p className={`${styles.sum} text text_type_digits-large`}>45545454</p>
        </div>


      </div>
    </section>
  );
}

export default Feed;
