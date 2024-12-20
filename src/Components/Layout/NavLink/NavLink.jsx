import React from "react";
import { Link, useLocation } from "react-router";

const Navlink = ({ href, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`flex gap-1 sm:gap-4 items-center rounded-full p-3 text-sm sm:text-xl  font-semibold ${
        isActive ? "bg-[#CCFBEF] text-text1" : "text-text2"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default Navlink;
