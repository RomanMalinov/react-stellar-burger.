import { useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import Modal from "../modals/modals";
import OrderDetailst from "../order-details/order-details";

const FinalPrice = ({ sum }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className={styles.priceConteiner}>
      <div className={styles.cont}>
        <p className={`${styles.textSum} text text_type_digits-medium`}>
          {sum}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        width="36px"
        height="36px"
        onClick={handleOpenModal}
      >
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal handleClose={handleCloseModal}>
          <OrderDetailst />
        </Modal>
      )}
    </section>
  );
};

FinalPrice.propTypes = {
  sum: PropTypes.number.isRequired,
};

export default FinalPrice;
//1
