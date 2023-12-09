import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "@pages/Home";
import Meetings from "@pages/Meetings";

import DashboardLayout from "@layouts/DashboardLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Home />} />
      <Route path="meetings" element={<Meetings />} />
    </Route>
  )
);

function Dashboard() {
  return <RouterProvider router={router} />;
}

export default Dashboard;
