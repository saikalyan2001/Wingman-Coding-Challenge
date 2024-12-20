import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import CustomIcon from "../../CustomIcon/CustomIcon";

const Sidebar = () => {
  const Icons = [
    { href: "/", icon: <GoHomeFill /> },
    { href: "/chat", icon: <BiSolidMessageRounded /> },
    { href: "", icon: <MdGroups /> },
  ];

  return (
    <div>
      <div className="h-full w-10 lg:w-16 bg-bg1 fixed left-0 top-0 text-white text-xl flex flex-col justify-between items-center">
        <div className="flex flex-col gap-8 items-center mt-4">
          <div className="text-white">t</div>
          <div className="w-7 bg-green-900 h-[1px]"></div>
          <div className="flex flex-col gap-4 items-center text-sm lg:text-xl">
            {Icons.map((icon) => (
              <CustomIcon key={icon.href} {...icon} />
            ))}
          </div>
        </div>

        <div className="mb-4 cursor-pointer">
          <CustomIcon icon={<IoIosSettings />} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
