import { FirstPage } from "../../Pages/FisrtPage/FirstPage";
import { Home } from "../../Pages/Home/Home";

export function SwitchPage({ page = "landing" }) {
  switch (page) {
    case "landing":
      return <FirstPage />;
      break;
    case "home":
      return <Home />;
    break;
  }
}
