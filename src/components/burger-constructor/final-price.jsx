import { useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import Modal from "../modals/modals";
import OrderDetails from "../order-details/order-details";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../services/authSlice";

const FinalPrice = ({ sum, onOrderClick }) => {

  const navigate = useNavigate();
  const user = useSelector(getUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOrderClick = () => {
    if (!user.email) {
      navigate("/login");
    } else {
      onOrderClick();
      handleOpenModal();
    }
  };

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
        onClick={handleOrderClick}
      >
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal handleClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

FinalPrice.propTypes = {
  sum: PropTypes.number.isRequired,
};

export default FinalPrice;
