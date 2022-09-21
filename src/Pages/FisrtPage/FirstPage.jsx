import { Slogan } from "../../Components/Slogan/Slogan";
import "./FirstPage.css";
import "../../styles/colors.css";

export function FirstPage() {
  return (
    <section>
      <div className="container">
        <img className="ilustration" src="src/Assets/images/illustration.svg" alt="ilustração" />
        <Slogan />
      </div>
    </section>
  );
}
