import React from "react";
import {
  DashboardOutlined,
  FilePdfFilled,
  HomeOutlined,
  MailOutlined,
  MoneyCollectOutlined,
  RadarChartOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router";
import { act } from "react-dom/test-utils";

const sidebarItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardOutlined />,
  },
  {
    name: "Expenses",
    path: "/expenses",
    icon: <MoneyCollectOutlined />,
  },
  {
    name: "Home",
    path: "/home",
    icon: <HomeOutlined />,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: <RadarChartOutlined />,
  },
  {
    name: "Mail",
    path: "/mail",
    icon: <MailOutlined />,
  },
  {
    name: "Settings",
    path: "/settings",
    // icon: <SettingsOutlined/>,
  },
  {
    name: "Statement",
    path: "/statement",
    icon: <FilePdfFilled />,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: <TransactionOutlined />,
  },
];
const Sidebar = () => {
  return (
    <div className="w-44 bg-gray-200">
      <div className="pt-10">
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive, isPending }) => {
              return (
                "flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-800" +
                (isPending ? "" : isActive ? " bg-gray-300 " : "")
              );
            }}
          >
            <span> {item.icon}</span>
            <span> {item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
