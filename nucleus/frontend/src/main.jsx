import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PomodoroTimer from "./components/timer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <PomodoroTimer />
  </React.StrictMode>,
);
