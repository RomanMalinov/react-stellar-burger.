import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./profile.module.css";
import { fetchLogout } from "../../services/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    dispatch(fetchLogout());
    navigate("/login");
  };

  const isProfileActive = location.pathname === "/profile";
  const isOrderActive = location.pathname === "/profile/orders";

  return (
    <main className={`${styles.main} pl-10`}>
      <nav className={styles.navLinks}>
        <p className="text text_type_main-medium pt-4 pb-4">
          <Link
            to={"/profile"}
            className={`${styles.link}  ${
              isProfileActive ? "text_color_primary" : "text_color_inactive"
            }`}
          >
            Профиль
          </Link>
        </p>
        <p className="text text_type_main-medium pt-4 pb-4 ">
          <Link
            to={"/profile/orders"}
            className={`${styles.link}  ${
              isOrderActive ? "text_color_primary" : "text_color_inactive"
            }`}
          >
            История заказов
          </Link>
        </p>
        <p className="text text_type_main-medium pt-4 pb-4 ">
          <Link
            onClick={handleLogout}
            className={`${styles.link} text_color_inactive`}
          >
            Выход
          </Link>
        </p>
        <p className="mt-20 pt-1 text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <Outlet />
    </main>
  );
}

export default Profile;
