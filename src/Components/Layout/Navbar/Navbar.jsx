import React from "react";
import { PiChartPieSliceFill } from "react-icons/pi";
import { BsFillTagFill } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  const navlinks = [
    { href: "/", icon: <PiChartPieSliceFill />, label: "Summary" },
    { href: "/sales", icon: <BsFillTagFill />, label: "Sales" },
    { href: "/chats", icon: <BiSolidMessageRoundedDetail />, label: "Chats" },
  ];

  return (
    <div className="bg-white border-b border-[#DCDFE4] p-6">
      <div className="flex text-xs lg:text-sm ml-6 sm:gap-10 lg:ml-16">
        {navlinks.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
