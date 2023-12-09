import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@pages/Home";
import AboutPage from "@pages/About";
import ContactPage from "@pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
