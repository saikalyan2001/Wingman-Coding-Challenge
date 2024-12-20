import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import CustomIcon from "../../Customicon/Customicon";

const Sidebar = () => {
  const Icons = [
    { href: "/", icon: <GoHomeFill /> },
    { href: "/chats", icon: <BiSolidMessageRounded /> },
  ];

  return (
    <div>
      <div className="h-full w-10 sm:w-12 lg:w-16 bg-bg1 border-r border-[#DCDFE4] fixed left-0 top-0 text-white text-xl flex flex-col justify-between items-center">
        <div className="flex flex-col gap-8 items-center mt-4">
          <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-gradient-to-br from-[#0D5D54] to-[#3FDBCA] rounded-[10px] shadow-md">
            <img
              src="/Logo.png"
              className="text-white font-bold w-3 lg:w-4"
            ></img>
          </div>

          <div className=" w-4 sm:w-7 bg-[#134E48] h-[1px]"></div>
          <div className="flex flex-col gap-4 items-center text-sm sm:text-base lg:text-xl">
            {Icons.map((icon) => (
              <CustomIcon key={icon.href} {...icon} />
            ))}
            <img src="/Community.png" alt="img" className="cursor-pointer " />
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
