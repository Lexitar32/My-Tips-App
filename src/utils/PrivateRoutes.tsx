import { Outlet, Navigate } from "react-router-dom";

const checkAuthentication = () => {
  // TO-DO: Check if user is authenticated and return true or false
  return { token: true };
};

const PrivateRoutes = () => {
  const auth = checkAuthentication();

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
