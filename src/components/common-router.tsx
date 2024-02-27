import { useAppSelector } from "../services/store";
import { Navigate } from "react-router-dom";
import { getUser } from "../services/authSlice";

type CommonRouteProps = {
  element: JSX.Element
};

function CommonRoute({ element }: CommonRouteProps): JSX.Element {
  const user = useAppSelector(getUser);

  if (!user || !user.email) return element;
  return <Navigate to="/" replace />;
}


export default CommonRoute;
