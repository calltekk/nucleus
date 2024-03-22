import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js/auto';

const Charts = () => {
  const [pomodoroData, setPomodoroData] = useState({
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Pomodoros Completed",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  // Function to retrieve data from local storage
  const getPomodoroDataFromLocalStorage = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("pomodoroData"));
    if (dataFromLocalStorage) {
      setPomodoroData(dataFromLocalStorage);
    }
  };

  useEffect(() => {
    getPomodoroDataFromLocalStorage();
  }, []);

  // Update local storage whenever pomodoro data changes
  useEffect(() => {
    localStorage.setItem("pomodoroData", JSON.stringify(pomodoroData));
  }, [pomodoroData]);

  // Chart options with scales
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        ticks: {
          color: 'white',
          beginAtZero: true,
        },
        grid: {
          color: 'lightgrey',
        },
      },
      y: {
        type: 'linear',
        ticks: {
          color: 'white',
          beginAtZero: true,
          stepSize: 1,
        },
        grid: {
          color: 'lightgrey',
        },
      },
    },
  };

  return (
    <div className="mt-40 ml-4">
      <h2 className="text-white mb-4">Pomodoro's Completed</h2>
      <div style={{ height: "400px", width: "600px" }}>
        <Bar 
          data={pomodoroData} 
          options={options} 
        />
      </div>
    </div>
  );
};

export default Charts;
