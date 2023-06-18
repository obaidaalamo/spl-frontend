import { CanvasJSChart } from "canvasjs-react-charts";
import { useContext, useEffect, useState } from "react";
import { WebsocketContexts } from "../../Contexts/WebsoketContexts";

export const ChartView = () => {
  const [chartData, setCartData] = useState([{ y: 0, x: 0 }]);
  const socket = useContext(WebsocketContexts);

  const options = {
    backgroundColor: "#1a2138",
    animationEnabled: true,
    axisX: {
      labelFontColor: "#fff",
      minimum: 0,
      maximum: 10,
    },
    axisY: { labelFontColor: "#1a2138", minimum: 0, maximum: 10 },
    data: [
      {
        type: "spline",
        markerSize: 0,
        dataPoints: chartData,
      },
    ],
  };

  useEffect(() => {
    socket.on("onGameStarted", () => {
      setCartData([{ y: 0, x: 0 }]);
    });

    socket.on("onChartData", (data) => {
      let newChartData = chartData;
      if (newChartData.length > 2)
        newChartData[newChartData.length - 2] = {
          x: newChartData[newChartData.length - 2].x,
          y: newChartData[newChartData.length - 2].y,
        };
      setCartData(() => [
        ...newChartData,
        {
          y: data.value,
          x: data.value,
          indexLabel: (data.value + "").substring(0, 4) + "X",
          markerType: "circle",
          indexLabelFontColor: "#a855f7",
          markerSize: 10,
          markerColor: "#a855f7",
        },
      ]);
    });
    return () => {
      socket.off("onGameStarted");
      socket.off("onChartData");
    };
  }, [socket]);
  return <CanvasJSChart options={options} />;
};
