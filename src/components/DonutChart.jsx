import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from 'chart.js';

const DonutChart = ({ data }) => {
  // Extracting labels and data from the provided list of name-value pairs
  const labels = data.map((item) => item.name);
  const values = data.map((item) => item.value);

  // Predefined color palette
  const colors = [
    "#E6E6FA", "#FFD1DC", "#98FF98", "#FF7F50", "#FFDAB9",
    "#FFFF99", "#87CEEB", "#00CED1", "#DA70D6", "#4B0082",
    "#89CFF0", "#FA8072", "#32CD32", "#DC143C", "#F28500",
    "#FFD700", "#007BA7", "#40E0D0", "#8E4585", "#6F00FF",
    "#FFF0F5", "#FFC0CB", "#00FF7F", "#CE2029", "#FFD800"
  ];

  Chart.register(ArcElement);

  // Selecting colors from the predefined palette based on the number of data items
  const backgroundColor = colors.slice(0, data.length);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor,
      },
    ],
  };

  const options = {
    animation: {
      animate: false, // Disable animation
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = labels[context.tooltip.dataPoints[0].index]; // Access labels from the 'labels' variable
            const value = chartData.datasets[context.datasetIndex].data[context.dataIndex]; // Access data from the 'chartData' variable
            return `${label}: ${value}`;
          }
        }
      },
      legend: {
        position: 'bottom', // Change legend position
        labels: {
          usePointStyle: true, // Use point style for legend labels
        }
      }
    }
  };
  
  

  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DonutChart;
