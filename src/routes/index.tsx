// routes.js
import { lazy } from "react";

// Pages
const Home = lazy(() => import("@pages/PublicPages/index"));
const ProfilePage = lazy(
  () => import("@pages/ProtectedPages/Dashboard/Profile")
);

const publicRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
];

const privateRoutes = [
  {
    path: "profile",
    title: "Profile",
    component: ProfilePage,
  },
];

export { publicRoutes, privateRoutes };
