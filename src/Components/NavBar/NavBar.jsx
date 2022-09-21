import "./NavBar.css";
import "../../styles/colors.css";

export function NavBar({ page }) {
  return (
    <header className="nav__container">
      <div className="header__container">
        <img className="nav__logo" src="src/Assets/images/Logo-2.svg" alt="logo Nu Kenzie" />
        <div className="header__btn__box">
          <button
            className="link__btn"
            onClick={() => {
              page("firstPage");
            }}
          >
            inicio
          </button>
        </div>
      </div>
    </header>
  );
}
