import { useLocation } from "react-router-dom";
import Logo from "@assets/Logo.jpg";
import { checkAuthentication } from "@utils/helpers";

export const Header = () => {
  const location = useLocation();
  const isLoggedIn = checkAuthentication();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">My Resources Tips</span>
            <img alt="Logo" src={Logo} className="w-auto h-10" />
          </a>
        </div>
        <div className="flex justify-end flex-1">
          <a
            href={`${
              isLoggedIn
                ? "/dashboard"
                : location.pathname == "/login"
                ? "/signup"
                : "/login"
            }`}
            className="text-lg font-semibold text-gray-900"
          >
            {isLoggedIn
              ? "Dashboard"
              : location.pathname == "/login"
              ? "Sign up"
              : "Log in"}{" "}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
