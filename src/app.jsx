import { useState } from "react";
import {FirstPage} from "./Pages/FisrtPage/FirstPage";
import Home from "./Pages/Home/Home";

export default function App() {
  const [pageName, setPageName] = useState("");

  return pageName === "home" ? <Home pageReturn={setPageName} /> : <FirstPage setPageName={setPageName} />;
}