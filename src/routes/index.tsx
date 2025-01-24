import { lazy } from "react";

// Pages
const Home = lazy(() => import("@pages/PublicPages/index"));
const LoginPage = lazy(() => import("@pages/PublicPages/login"));
const SignupPage = lazy(() => import("@pages/PublicPages/signup"));
const ProfilePage = lazy(() => import("@pages/Dashboard/Profile"));
const Dashboard = lazy(() => import("@pages/Dashboard/index"));

const publicRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/login",
    title: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    title: "SignupPage",
    component: SignupPage,
  },
];

const privateRoutes = [
  {
    path: "",
    title: "Dashboard",
    component: Dashboard,
  },
  {
    path: "profile",
    title: "Profile",
    component: ProfilePage,
  },
];

export { publicRoutes, privateRoutes };
