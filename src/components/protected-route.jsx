import { getUser } from "../services/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute({ element }) {
  const user = useSelector(getUser);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return user.email ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
