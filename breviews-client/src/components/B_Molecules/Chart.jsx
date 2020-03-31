import React from "react";
import {
  ComposedChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import data from '../constants/chart_sample';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Not sure if its a good idea to bring all data here 
    const { mainpageData } = this.props;
    let chartData = [];
    mainpageData.map(obj => {
      if(obj.chartData.length !== 0) {
        chartData.push(obj.chartData);
      } 
    })
    // if chartData empty use hard coded from constants
    if (chartData.length === 0) {
      chartData = data
    }
    return (
      <div
        className="chart-wrapper"
        style={{
          backgroundColor: "#f2f2f2",
          width: "90%",
          margin: "0 auto",
          padding: "0.8em",
          borderRadius: "2px",
          color: "#333"
        }}
      >
        <div>
          <h3 style={{ marginBottom: "0.2em" }}>Employment Rate</h3>
          <span style={{ fontStyle: "italic", fontSize: "11px" }}>
            Based on reviews
          </span>
        </div>
        <ResponsiveContainer width={"100%"} height={520}>
          <ComposedChart
            layout="vertical"
            data={chartData}
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
            <Bar dataKey="rate" barSize={10} fill="#c3352b" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default Chart;
