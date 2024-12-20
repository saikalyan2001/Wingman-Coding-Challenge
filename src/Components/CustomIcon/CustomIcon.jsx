import React from "react";
import { Link, useLocation } from "react-router";

const Customicon = ({ href, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`p-2 rounded-lg ${
        isActive ? "text-[#115E56] bg-white" : "text-[#CCFBEF]"
      }`}
    >
      {icon}
    </Link>
  );
};

export default Customicon;
