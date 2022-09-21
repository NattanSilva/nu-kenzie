import "./Slogan.css";
import "../../styles/colors.css";

export function Slogan({setPageName}) {
  return (
    <div className="slogan__container">
      <img
        className="logo"
        src="src/Assets/images/Logo.svg"
        alt="Logo Nu Kenzie"
      />
      <h1 className="slogan__title">Centralize o controle das suas finanças</h1>
      <p className="slogan__headline">de forma rápida e segura</p>
      <button
        onClick={() => {
          setPageName("home");
        }}
        type="button"
        id="slogan__start__btn"
      >
        Iniciar
      </button>
    </div>
  );
}
