import { useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import Modal from "../modals/modals";
import OrderDetails from "../order-details/order-details";
import { setOrderNumber } from "../../services/orderSlice";
const FinalPrice = ({ sum, orderNumber, onOrderClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOrderNumber(null);
  };

  return (
    <section className={styles.priceContainer}>
      <div className={styles.cont}>
        <p className={`${styles.textSum} text text_type_digits-medium`}>
          {sum} <CurrencyIcon type="primary" />
        </p>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={handleOpenModal}
        >
          Оформить заказ
        </Button>
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <OrderDetails orderNumber={orderNumber} />
          </Modal>
        )}
      </div>
    </section>
  );
};

FinalPrice.propTypes = {
  sum: PropTypes.number.isRequired,
  orderNumber: PropTypes.string,
  onOrderClick: PropTypes.func.isRequired,
};

export default FinalPrice;
