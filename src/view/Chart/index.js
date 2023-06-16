import { CanvasJSChart } from "canvasjs-react-charts";

export const ChartView = () => {
  const options = {
    backgroundColor: "#1a2138",
    animationEnabled: true,
    axisX: {
      labelFontColor: "#fff",
      // valueFormatString: "1",
    },
    axisY: { labelFontColor: "#1a2138" },
    data: [
      {
        type: "spline",
        dataPoints: [
          { y: 0 },
          { y: 1 },
          { y: 2 },
          { y: 3 },
          { y: 4 },
          { y: 5 },
          { y: 6 },
          { y: 7 },
          { y: 8 },
          { y: 9 },
          { y: 10 },
        ],
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};
