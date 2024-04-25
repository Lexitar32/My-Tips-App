import { Suspense, lazy } from "react";
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
  return <RouterProvider router={router} />;
}

export default App;
