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
    percentage: 0
  },
  {
    name: "Cybertek",
    percentage: 0
  },
  {
    name: "Salesforce Bootcamp",
    percentage: 0
  },
  {
    name: "Cloudgate Academy",
    percentage: 0
  }
];

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Not sure if its a good idea to bring all data here 
    const { mainpageData } = this.props;
    let charData = [];
    mainpageData.map(obj => {
      if(obj.charData.length !== 0) {
        // console.log(typeof obj.charData['rate'])
        charData.push(obj.charData);
      } 
    })
    // if charData empty use hard coded data above
    if (charData.length === 0) {
      charData = data
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
            data={charData}
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
