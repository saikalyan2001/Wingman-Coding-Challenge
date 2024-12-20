import React from "react";
import { Link, useLocation } from "react-router";

const NavLink = ({ href, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`flex gap-1 lg:gap-2 items-center rounded-full p-3 font-semibold ${
        isActive ? "bg-green-200" : "text-gray-500"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavLink;
