import { Header } from "@components/common/NavBar/Public";
import { AuthProvider } from "@contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="font-mont">
        <Header />
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">
              {location.pathname == "/login"
                ? "         Sign in to your account"
                : "Sign up"}
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Outlet />
          </div>
        </div>
      </div>

      <Toaster />
    </AuthProvider>
  );
}
