import "./Slogan.css";

export function Slogan() {
  return (
    <div className="slogan__container">
      <img className="logo" src="src/Assets/images/Logo.svg" alt="Logo Nu Kenzie" />
      <h1 className="slogan__title">Centralize o controle das suas finanças</h1>
      <p className="slogan__headline">de forma rápida e segura</p>
      <button id="slogan__start__btn">Iniciar</button>
    </div>
  )
}