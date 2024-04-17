import React, { useState } from "react";
import "./App.css";
import DynamicList from "./components/DynamicList";
import DonutChart from "./components/DonutChart";
import ApexChart from "./components/ApexChart";

function App() {
  const [pieChartData, setPieChartData] = useState([{ name: "", value: 0 }]);

  return (
    <>
      <DynamicList
        pieChartData={pieChartData}
        setPieChartData={setPieChartData}
      />
      {/* <DonutChart data={pieChartData}/>  */}
      <ApexChart data={pieChartData}></ApexChart>
    </>
  );
}

export default App;
