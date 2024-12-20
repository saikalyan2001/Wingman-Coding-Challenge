import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const data = [
  { day: "Mon", incoming: 40, answered: 30, experts: 13.9 },
  { day: "Tue", incoming: 45, answered: 32, experts: 13.8 },
  { day: "Wed", incoming: 50, answered: 35, experts: 14.5 },
  { day: "Thu", incoming: 60, answered: 55, experts: 19 },
  { day: "Fri", incoming: 48, answered: 38, experts: 14.3 },
  { day: "Sat", incoming: 53, answered: 40, experts: 15.5 },
  { day: "Sun", incoming: 58, answered: 42, experts: 15.6 },
];

const Chart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      className="bg-white border rounded-3xl py-4 "
    >
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 12 }}
          label={{ position: "insideBottom", offset: -10 }}
        />
        <YAxis
          yAxisId="left"
          tick={{ fontSize: 12 }}
          domain={[10, 60]}
          ticks={[10, 20, 30, 40, 50, 60]}
          label={{
            value: "Consultations",
            angle: -90,
            position: "insideLeft",
            offset: 10,
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontSize: 12 }}
          domain={[10, 20]}
          ticks={[10, 12, 14, 16, 18, 20]}
          tickFormatter={(value) => (value === 20 ? 20 : 10)}
          label={{
            value: "Experts Online",
            angle: -90,
            position: "insideRight",
            offset: 10,
          }}
        />

        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          payload={[
            { value: "Incoming", type: "line", color: "#999999" },
            { value: "Answered", type: "line", color: "#00C49F" },
            { value: "Experts Online", type: "rect", color: "#FFE082" },
          ]}
        />
        <Bar
          yAxisId="right"
          dataKey="experts"
          fill="#FFE082"
          barSize={35}
          radius={[5, 5, 0, 0]}
        />
        <Line
          yAxisId="left"
          type="basis"
          dataKey="answered"
          stroke="#00C49F"
          strokeWidth={2.5}
          dot={{ r: 2 }}
        />
        <Line
          yAxisId="left"
          type="basis"
          dataKey="incoming"
          stroke="#999999"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
