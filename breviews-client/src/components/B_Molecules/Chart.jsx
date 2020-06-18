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
import { data } from '../../utils/chart_sample';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Chart = ({ mainpageData }) => { 

    let chartData = [];
    mainpageData.map(obj => {
      if(obj.chartData.length !== 0) {
        chartData.push(obj.chartData);
      } 
    })
    // if chartData is empty use initial data from constants
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
          <h4 style={{ marginBottom: "0.2em" }}>Employment Rate</h4>
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
              left: 120
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

  Chart.propTypes = {
    mainpageData: PropTypes.array.isRequired
  }
  const mapStateToProps = state => ({
    mainpageData: state.landing.mainpageData
  })
export default connect(mapStateToProps, {})(Chart);
