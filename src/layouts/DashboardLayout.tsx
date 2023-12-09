import { Outlet } from "react-router-dom";
import { SideBar } from "@components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="root-layout">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
