import React from "react";
import Customcard from "../../Components/Customcard/Customcard";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BsFillTagFill } from "react-icons/bs";
import { GrFormCheckmark } from "react-icons/gr";
import { PiCoinsFill } from "react-icons/pi";
import { PiCoinFill } from "react-icons/pi";
import { PiPiggyBankFill } from "react-icons/pi";
import Orders from "../../Components/Orders/Orders";
import ConsultationChart from "../../Components/Charts/Chart/Chart";
import CustomBarChart from "../../Components/Charts/Barchart/Barchart";
import Forecast from "../../Components/Charts/Forecast/Forecast";
import Dropdownmenu from "../../Components/Dropdownmenu/DropdownMenu";

const Summary = () => {
  return (
    <div className="ml-12 mr-2  lg:ml-20 lg:mr-4 py-4 sm:py-10">
      <div className="bg-white border border-gray-200  rounded-xl  p-[32px_24px] w-[100%] max-w-[100%] lg:max-w-[100%] ">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-sm lg:text-3xl text-text1 font-semibold opacity-80">
            At a glance
          </h1>

          <div>
            <Dropdownmenu />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-y-6 gap-x-20 lg:gap-x-4 justify-items-center">
          <Customcard
            title="CONSULTATIONS"
            value="24"
            increase="15%"
            type="increase"
            icon={<BiSolidMessageRoundedDetail />}
          />
          <Customcard
            title="ORDERS PLACED"
            value="12"
            decrease="15%"
            type="decrease"
            icon={<BsFillTagFill />}
          />
          <Customcard
            title="CONVERSION"
            value="50%"
            decrease="15%"
            type="decrease"
            icon={<GrFormCheckmark />}
          />
          <Customcard
            title="TOTAL SALES VALUE"
            value="$2,400"
            increase="15%"
            type="increase"
            icon={<PiCoinsFill />}
          />
          <Customcard
            title="AVG ORDER VALUE"
            value="$240"
            increase="15%"
            type="increase"
            icon={<PiCoinFill />}
          />
          <Customcard
            title="COMMISSION PAID"
            value="$240"
            increase="15%"
            type="increase"
            icon={<PiPiggyBankFill />}
          />
        </div>

        <div className="mt-20">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl text-text1 font-semibold opacity-80">
            Insights
          </h1>
          <div className="flex flex-col lg:flex-row gap-6 mt-20">
            <ConsultationChart />
            <CustomBarChart />
            <Forecast />
          </div>
        </div>

        <Orders />
      </div>
    </div>
  );
};

export default Summary;
