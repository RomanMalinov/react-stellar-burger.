import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../services/authSlice";
import PropTypes from "prop-types";

type CommonRouteProps = {
  element: JSX.Element
};

function CommonRoute({ element }: CommonRouteProps): JSX.Element {
  const user = useSelector(getUser);

  if (!user || !user.email) return element;
  return <Navigate to="/" replace />;
}

CommonRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default CommonRoute;
