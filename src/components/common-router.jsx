import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function CommonRoute({ element }) {
  const user = useSelector((state) => state.auth);

  if (!user || !user.email) {
    return element;
  } else {
    return <Navigate to="/" replace />;
  }
}

CommonRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default CommonRoute;
