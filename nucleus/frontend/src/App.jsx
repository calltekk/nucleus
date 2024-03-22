import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Header from "./components/Header";
import HomePage from "./pages/1-HomePage";
import TasksFullscreen from "./pages/2-Tasks";
import Stats from "./pages/4-Stats";
import SignUp from "./pages/5-SignUp";
import LogIn from "./pages/6-LogIn";

function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="tasks" element={<TasksFullscreen />}/>
        <Route path="stats" element={<Stats />}/>
        <Route path="/signup" element={!user ? <SignUp />: <Navigate to="/" />}/>
        <Route path="/login" element={!user ? <LogIn />: <Navigate to="/" />}/>
      </Routes>
    </Router>
  )
};

export default App;