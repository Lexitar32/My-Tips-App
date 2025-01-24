import { Outlet, Navigate } from "react-router-dom";
import { checkAuthentication } from "./helpers";

const PublicRoutes = () => {
  const isLoggedIn = checkAuthentication();

  return isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
