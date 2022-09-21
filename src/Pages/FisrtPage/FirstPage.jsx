import { Slogan } from "../../Components/Slogan/Slogan";
import "./FirstPage.css";
import "../../styles/colors.css";

export function FirstPage({setPageName}) {
  return (
    <section className="landing__container">
      <div className="container">
        <Slogan className="slogan" setPageName={setPageName}/>
        <img
          className="ilustration"
          src="src/Assets/images/illustration.svg"
          alt="ilustração"
        />
      </div>
    </section>
  );
}
