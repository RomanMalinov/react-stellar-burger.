import { getUser } from "../services/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute({ element }) {
  const user = useSelector(getUser);

  if (!user) {
    return null;
  }

  return user.email ? element : <Navigate to="/login" replace />;
}

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
