// import Overlay from "components/common/Overlay";
import ModalBackProject from "components/modal/ModalBackProject";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import { Outlet } from "react-router-dom";
const LayoutDashboard = () => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-8 py-5 overflow-y-hidden bg-lite">
    <ModalBackProject></ModalBackProject>
      {/* <Overlay></Overlay> */}
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1 mb-10 overflow-y-auto max-h-[calc(100vh-118px)] scroll-smooth">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;