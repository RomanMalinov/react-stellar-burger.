import AppHeader from "../app-header/app-header";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Notfoundpage from "../../pages/not-found-page/not-found-page";
import ResetPassword from "../../pages/reset-password/reset-password";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import FogotPassword from "../../pages/forgot-password/forgot-password";
import Profile from "../../pages/profile/profile";

import styles from "./app.module.css";

function App() {
  return (
    <main className={styles.app}>
      <AppHeader />
      <Routes>
        {/* <Route path="/" element={<FogotPassword />}></Route> */}
        {/* <Route path="/" element={<Login />}></Route> */}
        {/* <Route path="/" element={<Register />}></Route> */}
        {/* <Route path="/" element={<ResetPassword/>}></Route> */}
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/" element={<Profile />}></Route> */}

        <Route path="*" element={<Notfoundpage />} />
      </Routes>
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
