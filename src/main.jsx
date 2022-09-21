import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import { FirstPage } from "./Pages/FisrtPage/FirstPage";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstPage />
    {/* <Home /> */}
  </React.StrictMode>
);
