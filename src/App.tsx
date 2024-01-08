import { Suspense, lazy, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
const DashboardLayout = lazy(() => import("@layouts/DashboardLayout"));

// Pages
import Home from "@pages/PublicPages/Home";
import AboutPage from "@pages/PublicPages/About";
import ContactPage from "@pages/PublicPages/Contact";
import NotFoundPage from "@pages/PublicPages/NotFound";
import Meetings from "@pages/ProtectedPages/Dashboard/Meetings";
import Dashboard from "@pages/ProtectedPages/Dashboard";
import ProfilePage from "@pages/ProtectedPages/Dashboard/Profile";

// Components
import Loader from "@utils/Loader";
import PrivateRoutes from "@utils/PrivateRoutes";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<PrivateRoutes />}>
      <Route
        path="/dashboard/*"
        element={
          <Suspense fallback={<Loader />}>
            <DashboardLayout />
          </Suspense>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="meetings" element={<Meetings />} />
      </Route>
    </Route>
    <Route index element={<Home />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
