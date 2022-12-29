import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = () => {
  const authToken = localStorage.getItem('Access Token');

  return !authToken ? <Navigate to='/' /> : <Outlet />;
};

export default NonAuthRoute;
