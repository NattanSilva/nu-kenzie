import "./Total.css";

export function Total({ totalValue }) {
  return (
    <div className="total__container">
      <div className="total__infos__container">
        <h3>Valor Total:</h3>
        <p>R$ {totalValue}</p>
      </div>
      <span className="total__description">O valor se refere ao saldo</span>
    </div>
  );
}
