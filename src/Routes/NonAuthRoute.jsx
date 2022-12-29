import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  const authToken = localStorage.getItem('Access Token');

  return !authToken ? <Outlet /> : <Navigate to='/home' />;
};

export default AuthRoute;
