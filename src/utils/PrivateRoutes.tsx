import { Outlet, Navigate } from "react-router-dom";
import { checkAuthentication } from "./helpers";

const PrivateRoutes = () => {
  const isLoggedIn = checkAuthentication();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
