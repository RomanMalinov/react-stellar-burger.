
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function CommonRoute({ element }) {
  const user = useSelector((state) => state.auth);

  if (!user || !user.email) {
    return element;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default CommonRoute;


