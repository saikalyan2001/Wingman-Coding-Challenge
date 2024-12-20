import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const CustomCard = ({ title, value, type, icon, increase, decrease }) => {
  return (
    <div className="bg-white rounded-3xl shadow w-[100%] max-w-[100%]  lg:max-w-[100%] py-8 px-6 space-y-3">
      <div className="flex gap-2 items-center text-text2 font-semibold text-xs lg:text-sm">
        {icon}
        {title}
      </div>
      <h1 className="text-2xl lg:text-4xl text-text1 font-semibold">{value}</h1>
      <div
        className={`flex gap-2 items-center text-sm ${
          type == "increase" ? "text-text3" : "text-text4"
        }`}
      >
        {type === "increase" ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
        {increase || decrease} <span className="text-text2">{type}</span>
      </div>
    </div>
  );
};

export default CustomCard;
