import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Layouts
const DashboardLayout = lazy(() => import("@layouts/Dashboard"));
const AuthLayout = lazy(() => import("@layouts/Auth"));

// Components
import Loader from "@components/Loader";
import PrivateRoutes from "@utils/PrivateRoutes";
import PublicRoutes from "@utils/PublicRoutes";
import { privateRoutes, publicRoutes } from "./routes";
import { NotFound } from "@components/common/ErrorComponent/NotFound";

// Filter specific routes for AuthLayout
const authRoutes = publicRoutes.filter(
  (route) => route.path === "/login" || route.path === "/signup"
);

// Filter other public routes that don't require AuthLayout
const otherPublicRoutes = publicRoutes.filter(
  (route) => !authRoutes.some((authRoute) => authRoute.path === route.path)
);

const routes = createRoutesFromElements(
  <Route>
    {/* Private Routes for authenticated users */}
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

    {/* AuthLayout for specific public routes */}
    <Route element={<PublicRoutes />}>
      <Route
        element={
          <Suspense fallback={<Loader />}>
            <AuthLayout />
          </Suspense>
        }
      >
        {authRoutes.map(({ path, component: Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Route>

    {/* Other public routes */}
    {otherPublicRoutes.map(({ path, component: Component }, index) => (
      <Route
        key={index}
        path={path}
        element={
          <Suspense fallback={<Loader />}>
            <Component />
          </Suspense>
        }
      />
    ))}

    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routes);

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
