import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Header from "./Header"
import Line from "./Line"
import PieChart from "./Pie";

const Analyze = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "No of clients w.r.t months",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Header />
      <div lassName="h-2/5 w-2/6">
        <Bar data={data} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span className="flex items-center justify-center text-4xl">
          Reports : 48% clients increment in last year
        </span>
        <br />
        <br />
        <br />
      </div>
      <Line />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <PieChart />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Analyze;
