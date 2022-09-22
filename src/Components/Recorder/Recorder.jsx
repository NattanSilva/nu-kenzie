import "./Recorder.css";

export function Recorder() {
  return (
    <form className="recorder__container">
      <h3 className="recorder__title">Descrição</h3>
      <input id="description__input" type="text" placeholder="Digite aqui sua descrição" />
      <label className="recorder__sugestion">Ex: Compra de roupas...</label>
      <div className="options__container">
        <div className="value__container">
          <label className="recorder__title">Valor</label>
          <div>
            <input id="value__input" type="text" inputMode="numeric" placeholder="1"/>
            <p>R$</p>
          </div>
        </div>
        <div className="type__container">
          <label className="recorder__title">Tipo de valor</label>
          <select id="type__input">
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>
        </div>
      </div>
      <button id="add__value__btn" type="submit">Inserir Valor</button>
    </form>
  )
}