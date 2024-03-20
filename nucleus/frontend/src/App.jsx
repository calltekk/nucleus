import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import HomePage from "./pages/1-HomePage";
import TasksTimer from "./pages/2-Tasks-Timer";
import TasksFullscreen from "./pages/3-Tasks";
import TaskCreation from "./pages/4-Task-Creation";
import SignUp from "./pages/5-SignUp";
import LogIn from "./pages/6-LogIn";
import './assets/css/form.css';




function App() {
  const { user } = useAuthContext();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<HomePage />}
        />
        <Route 
          path="/signup"
          element={!user ? <SignUp />: <Navigate to="/" />}
        />
        <Route 
          path="/login"
          element={ !user ? <LogIn />: <Navigate to="/" /> }
        />
      </Routes>
    
    </BrowserRouter>
      
      
      <TasksTimer />
      <TasksFullscreen />
      <TaskCreation />
      

    </>
  )
};

export default App;