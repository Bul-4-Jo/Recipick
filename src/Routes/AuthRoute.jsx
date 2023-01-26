import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../Cookie/Cookie';

const NonAuthRoute = () => {
  const authToken = getCookie('Token');

  return !authToken ? <Navigate to='/' /> : <Outlet />;
};

export default NonAuthRoute;
