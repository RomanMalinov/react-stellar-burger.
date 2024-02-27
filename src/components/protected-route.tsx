import { getUser } from "../services/authSlice";
import { useAppSelector } from "../services/store";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  element: JSX.Element
};

function ProtectedRoute({ element }: ProtectedRouteProps): JSX.Element {
  const user = useAppSelector(getUser);
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

export default ProtectedRoute;
