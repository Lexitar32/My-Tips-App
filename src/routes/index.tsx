// routes.js
import { lazy } from "react";

// Pages
const Home = lazy(() => import("@pages/PublicPages/Home"));
const AboutPage = lazy(() => import("@pages/PublicPages/About"));
const ContactPage = lazy(() => import("@pages/PublicPages/Contact"));
const NotFoundPage = lazy(() => import("@pages/PublicPages/NotFound"));
const Meetings = lazy(() => import("@pages/ProtectedPages/Dashboard/Meetings"));
const ProfilePage = lazy(
  () => import("@pages/ProtectedPages/Dashboard/Profile")
);

const publicRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/about",
    title: "About",
    component: AboutPage,
  },
  {
    path: "/contact",
    title: "Contact",
    component: ContactPage,
  },
  {
    path: "*",
    title: "NotFound",
    component: NotFoundPage,
  },
];

const privateRoutes = [
  {
    path: "profile",
    title: "Profile",
    component: ProfilePage,
  },
  {
    path: "meetings",
    title: "Meetings",
    component: Meetings,
  },
  {
    path: "*",
    title: "NotFound",
    component: NotFoundPage,
  },
];

export { publicRoutes, privateRoutes };
