import { lazy } from "react";

// Pages
const Home = lazy(() => import("@pages/PublicPages/index"));
const LoginPage = lazy(() => import("@pages/PublicPages/login"));
const SignupPage = lazy(() => import("@pages/PublicPages/signup"));
const ShareTips = lazy(() => import("@pages/PublicPages/ShareTips"));
const ProfilePage = lazy(() => import("@pages/Dashboard/Profile"));
const CheckedTips = lazy(() => import("@pages/Dashboard/CheckedTips"));
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
  {
    path: "/shareTips/:id",
    title: "ShareTips",
    component: ShareTips,
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
  {
    path: "checked-tips",
    title: "CheckedTips",
    component: CheckedTips,
  },
];

export { publicRoutes, privateRoutes };
