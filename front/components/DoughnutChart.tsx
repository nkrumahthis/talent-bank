"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [5709.2, 2149.2, 8798.22],
        backgroundColor: ["#AF144B", "#FFCC08", "#22577A"],
      },
    ],
    labels: ["Absa", "MoMo", "Ecobank"],
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: { display: false },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
