import { useState } from "react";
import Header from "@components/common/NavBar/Dashboard";
import Sidebar from "@components/common/Sidebar";
import { Outlet } from "react-router-dom";
import { BudgetProvider } from "src/contexts/BudgetContext";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BudgetProvider>
      <div className="bg-gray-2 dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main>
              <div className="min-h-screen p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
};

export default DashboardLayout;
