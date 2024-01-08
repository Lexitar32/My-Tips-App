import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@pages/PublicPages/Home";
import AboutPage from "@pages/PublicPages/About";
import ContactPage from "@pages/PublicPages/Contact";
import NotFoundPage from "@pages/PublicPages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
