import React, { useState, useEffect, useRef } from "react";  
import { createRoot } from "react-dom/client";
import HighchartsReact from "highcharts-react-official";  
import Highcharts from "highcharts/highcharts.src.js";  
import LabelComponent from "./label";  

const App = () => {  
  const [chartOptions] = useState({  
    series: [  
      {  
        data: [1, 2, 3]  
      }  
    ],  
    xAxis: {  
      labels: {  
        useHTML: true,  
        formatter: function() {  
          return "";  
        }  
      }  
    }  
  });  

  const chartRef = useRef(null);  

  useEffect(() => {  
    if (chartRef.current) {  
      chartRef.current.reflow();  
    }  
  });  

  const afterChartCreated = (chart) => {  
    chartRef.current = chart; // Store the chart reference  
  };  

  const customLabels = () => {  
    const labels = [];  
    if (chartRef.current && chartRef.current.xAxis[0]) {  
      Highcharts.objectEach(chartRef.current.xAxis[0].ticks, function(tick) {  
        labels.push(<LabelComponent key={tick.pos} tick={tick} />);  
      });  
    }  
    return labels;  
  };  

  return (  
    <div>  
      <HighchartsReact  
        highcharts={Highcharts}  
        options={chartOptions}  
        callback={afterChartCreated}  
      />  
      {customLabels()}  
    </div>  
  );  
};  

const root = createRoot(document.getElementById("root"));  
root.render(<App />);
