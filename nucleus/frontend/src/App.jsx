import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import HomePage from "./pages/1-HomePage";
import TasksTimer from "./pages/2-Tasks-Timer";
import TasksFullscreen from "./pages/3-Tasks";
import TaskCreation from "./pages/4-Task-Creation";


function App() {
  return (
    <>
      <HomePage />
      <TasksTimer />
      <TasksFullscreen />
      <TaskCreation />
    </>
  )
};

export default App;