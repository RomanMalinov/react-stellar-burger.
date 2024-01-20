import { getUser } from "../services/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const user = useSelector(getUser);

  if (!user) {
    return null;
  }

  return user.email ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;


