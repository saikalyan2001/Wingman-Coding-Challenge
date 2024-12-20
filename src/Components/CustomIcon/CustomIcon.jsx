import React from "react";
import { Link, useLocation } from "react-router";

const CustomIcon = ({ href, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`p-2 rounded-lg ${isActive ? "text-bg1 bg-white" : ""}`}
    >
      {icon}
    </Link>
  );
};

export default CustomIcon;
