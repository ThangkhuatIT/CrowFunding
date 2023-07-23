// import Overlay from "components/common/Overlay";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
const LayoutDashboard = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-8 py-5 overflow-y-hidden bg-lite">
      {/* <Overlay></Overlay> */}
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1 mb-10 overflow-y-auto max-h-[80vh] scroll-smooth">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;