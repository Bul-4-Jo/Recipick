import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../Cookie/Cookie';

const AuthRoute = () => {
  const authToken = getCookie('Token');

  return !authToken ? <Outlet /> : <Navigate to='/home' />;
};

export default AuthRoute;
