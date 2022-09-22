import { useState } from "react";
import "./Recorder.css";

export function Recorder({ setDataBase }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);

  function createItem(event) {
    event.preventDefault();
    const item = {
      title,
      type,
      value: parseFloat(value),
    };

    setDataBase((prevState) => [...prevState, item]);
  }

  return (
    <form
      className="recorder__container"
      onSubmit={(event) => createItem(event)}
    >
      <h3 className="recorder__title">Descrição</h3>
      <input
        id="description__input"
        type="text"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setTitle(event.target.value)}
      />
      <label className="recorder__sugestion">Ex: Compra de roupas...</label>
      <div className="options__container">
        <div className="value__container">
          <label className="recorder__title">Valor</label>
          <div>
            <input
              id="value__input"
              type="text"
              inputMode="numeric"
              placeholder="1"
              onChange={(event) => setValue(event.target.value)}
            />
            <p>R$</p>
          </div>
        </div>
        <div className="type__container">
          <label className="recorder__title">Tipo de valor</label>
          <select
            id="type__input"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Saida</option>
          </select>
        </div>
      </div>
      <button id="add__value__btn" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}
