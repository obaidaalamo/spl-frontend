import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

export const ChartView = () => {
  const [options, setOption] = useState<any>({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  });
  const [series, setSeries] = useState<any>([
    {
      name: "series-1",
      data: [1, 2, 3, 4, 5, 6, 7, 10],
    },
  ]);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    //   let array = [...series, val];
    //   array.shift();
    //   setSeries(array);
    //   console.log(array);
    // }, 2000);
    // return () => {
    //   window.clearInterval(interval); // clear the interval in the cleanup function
    // };
  }, [series]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {/* {options && series && (
            <Chart options={options} data={series} type="line" width="500" />
          )} */}
        </div>
      </div>
    </div>
  );
};
