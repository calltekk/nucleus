import React from "react";
import { Bar } from "react-chartjs-2";

const PomodoroChart = ({ pomodoroData }) => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category", // Configure x-axis as category scale
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <h2>Pomodoro Usage</h2>
      <div style={{ height: "400px", width: "600px" }}>
        <Bar data={pomodoroData} options={options} />
      </div>
    </div>
  );
};

export default PomodoroChart;
