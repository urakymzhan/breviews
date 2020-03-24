import React from "react";
import {
  ComposedChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Seytech",
    percentage: 85
  },
  {
    name: "Cybertek",
    percentage: 85
  },
  {
    name: "Salesforce Bootcamp",
    percentage: 73
  },
  {
    name: "Cloudgate Academy",
    percentage: 60
  }
];

const Chart = () => {
  return (
    <div
      className="chart-wrapper"
      style={{
        backgroundColor: "#d3f3f7",
        width: "80%",
        margin: "0.8em auto",
        padding: "0.8em",
        borderRadius: "2px",
        color: "#333"
      }}
    >
      <div>
        <h3 style={{ marginBottom: "0.2em" }}>Employment rate after 4 month</h3>
        <span style={{ fontStyle: "italic", fontSize: "11px" }}>
          Based on reviews
        </span>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 80
          }}
        >
          <CartesianGrid stroke="#f7b0c8" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="percentage" barSize={10} fill="#c3352b" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
