import React from "react";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";

const Forecast = () => {
  return (
    <div className="bg-green-800 rounded-3xl px-4 py-8 text-white space-y-6">
      <div className="flex gap-2 items-center text-sm">
        <BiSolidMessageRoundedDetail />
        FORECASTS
      </div>
      <div className="flex gap-6">
        <p className="text-5xl">+15%</p>
        <FaArrowTrendUp className="text-3xl" />
      </div>
      <div className="text-sm w-42">
        forecasted increase in your sales closed by the end of the current month
      </div>
      <div className="flex gap-6">
        <p className="text-5xl">+ 20%</p>
        <FaArrowTrendUp className="text-3xl" />
      </div>
      <div className="text-sm w-42">
        forecasted increase in consultations by the end of the current month
      </div>
    </div>
  );
};

export default Forecast;
