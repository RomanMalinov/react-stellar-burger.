import AppHeader from "../app-header/app-header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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

import styles from "./app.module.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <main className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Home />}></Route>
        <Route path="forgotpassword" element={<FogotPassword />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="resetpassword" element={<ResetPassword />}></Route>
        <Route path="profile" element={<Profile />}></Route>
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
    </main>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./app.module.css";
// import AppHeader from "../app-header/app-header";
// import BurgerIngredients from "../burger-ingredients/burger-ingredients";
// import BurgerConstructor from "../burger-constructor/burger-constructor";
// import { getIngredients } from "../../utils/api";
// import { fetchIngredientList } from "../../services/ingredientListSlice";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchIngredientList());
//   }, [dispatch]);

//   return (
//     <div className={styles.app}>
//       <AppHeader />
//       <DndProvider backend={HTML5Backend}>
//         <main className={styles.contentConteiner}>
//           <BurgerIngredients />
//           <BurgerConstructor />
//         </main>
//       </DndProvider>
//     </div>
//   );
// }

// export default App;
