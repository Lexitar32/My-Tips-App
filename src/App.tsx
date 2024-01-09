import { Suspense, lazy, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
const DashboardLayout = lazy(() => import("@layouts/DashboardLayout"));

// Components
import Loader from "@utils/Loader";
import PrivateRoutes from "@utils/PrivateRoutes";
import { privateRoutes, publicRoutes } from "./routes";
import Dashboard from "@pages/ProtectedPages/Dashboard";

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
        {privateRoutes.map((routes, index) => {
          const { path, component: Component } = routes;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Route>
    {publicRoutes.map((routes, index) => {
      const { path, component: Component } = routes;
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={<Loader />}>
              <Component />
            </Suspense>
          }
        />
      );
    })}
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
