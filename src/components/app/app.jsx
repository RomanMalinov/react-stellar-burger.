import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import Home from "../../pages/home/home";
import Notfoundpage from "../../pages/not-found-page/not-found-page";
import ResetPassword from "../../pages/reset-password/reset-password";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import FogotPassword from "../../pages/forgot-password/forgot-password";
import Profile from "../../pages/profile/profile";
import IngredientDetailsPage from "../../pages/ingredient-deteils-page/ingredient-details-page";
import Modal from "../modals/modals";
import IngredientDetails from "../inrredient-details/inredient-details";
import ProtectedRoute from "../protected-route";
import CommonRoute from "../common-router";
import ProfileForm from "../profile-form/profile-form";
import OrederHistory from "../../pages/oreder-history/oreder-history";
import styles from "./app.module.css";
import { fetchGetUserData, loadState } from "../../services/authSlice";
import Loader from "../loader/loader";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();
  const loading = useSelector(loadState);

  useEffect(() => {
    dispatch(fetchGetUserData());
  }, [dispatch]);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <main className={styles.app}>
      <AppHeader />
      {loading === false ? (
        <>
          <Routes location={background || location}>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="forgotpassword"
              element={<CommonRoute element={<FogotPassword />} />}
            ></Route>
            <Route
              path="login"
              element={<CommonRoute element={<Login />} />}
            ></Route>
            <Route
              path="register"
              element={<CommonRoute element={<Register />} />}
            ></Route>
            <Route
              path="resetpassword"
              element={<CommonRoute element={<ResetPassword />} />}
            ></Route>
            <Route path="/" element={<ProtectedRoute element={<Profile />} />}>
              <Route
                path="profile"
                element={<ProtectedRoute element={<ProfileForm />} />}
              />
              <Route
                path="order"
                element={<ProtectedRoute element={<OrederHistory />} />}
              />
            </Route>
            <Route
              path="/ingredients/:ingredientId"
              element={<IngredientDetailsPage />}
            />
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
          {background && (
            <Routes>
              <Route
                path="/ingredients/:ingredientId"
                element={
                  <Modal handleClose={handleClose}>
                    <IngredientDetails />
                  </Modal>
                }
              />
            </Routes>
          )}
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default App;
