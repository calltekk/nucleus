import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { AuthContextProvider } from './context/AuthContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <> 
  {/* Removed React.Strict.Mode to enable drag and drop */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </>,
);
