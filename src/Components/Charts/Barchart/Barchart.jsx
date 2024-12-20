import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "This week",
    Consultations: 20,
    "Orders closed": 19.2,
  },
  {
    name: "Last week",
    Consultations: 18.5,
    "Orders closed": 17.5,
  },
];

const CustomBarChart = () => {
  const [chartWidth, setChartWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 400) {
        setChartWidth(200);
      } else {
        setChartWidth(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: 400 }} className="bg-white border rounded-3xl py-10">
      <h4 style={{ textAlign: "center", fontSize: 14 }} className="text-text1">
        VS PAST PERIOD
      </h4>
      <BarChart
        width={chartWidth}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[10, 20]}
          tickCount={6}
          tickFormatter={(value) => (value === 20 ? 20 : 10)}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Consultations"
          fill="#CCFBEF"
          barSize={35}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="Orders closed"
          fill="#134E48"
          barSize={35}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default CustomBarChart;
