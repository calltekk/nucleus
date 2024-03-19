import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/1-HomePage";
import TasksFullscreen from "./pages/2-Tasks";
import TaskCreation from "./pages/3-Task-Creation";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="tasks" element={<TasksFullscreen />}/>
        <Route path="newtask" element={<TaskCreation />}/>
      </Routes>
    </Router>
  )
};

export default App;