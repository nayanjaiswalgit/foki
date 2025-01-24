import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const HomeLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
