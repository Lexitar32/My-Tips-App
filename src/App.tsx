import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
const DashboardLayout = lazy(() => import("@layouts/Dashboard"));

// Components
import Loader from "@components/Loader";
import PrivateRoutes from "@utils/PrivateRoutes";
import { privateRoutes, publicRoutes } from "./routes";
import { BudgetProvider } from "@contexts/BudgetContext";
import { ModalProvider } from "@contexts/ModalContext";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<PrivateRoutes />}>
      <Route
        path="/dashboard/*"
        element={
          <Suspense fallback={<Loader />}>
            <BudgetProvider>
              <ModalProvider>
                <DashboardLayout />
              </ModalProvider>
            </BudgetProvider>
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
