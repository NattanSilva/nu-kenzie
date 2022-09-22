import { useEffect, useState } from "react";
import "./Filter.css";

export function Filter({ setFiltered, dataBase, setTypeName }) {
  const [all, setAll] = useState("btn__filter active");
  const [entries, setEntries] = useState("btn__filter");
  const [outputs, setOutputs] = useState("btn__filter");
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);
  // const type = dataBase.filter((el) => el.type);
  // console.log(type);
  // useEffect(() => {
  //   const type = dataBase.filter((el) => el.type);
  // }, []);

  function filterItems(itemType) {
    if (itemType === "all") {
      setFiltered(dataBase);
      setTypeName("all");
      setAll("btn__filter active");
      setEntries("btn__filter");
      setOutputs("btn__filter");
    } else if (itemType === "entries") {
      setFiltered(dataBase.filter(({ type }) => type === "Entrada"));
      setTypeName("Entrada");
      setEntries("btn__filter active");
      setAll("btn__filter");
      setOutputs("btn__filter");
    } else if (itemType === "outputs") {
      setFiltered(dataBase.filter(({ type }) => type === "Despesa"));
      setTypeName("Despesa");
      setOutputs("btn__filter active");
      setAll("btn__filter");
      setEntries("btn__filter");
    }
  }

  return (
    <div className="filter__container">
      <h3 className="filter__titile">Resumo Financeiro</h3>
      <div className="filter__btn__container">
        <button
          onClick={(e) => {
            filterItems(e.target.value);
          }}
          className={all}
          value="all"
        >
          Todos
        </button>
        <button
          onClick={(e) => {
            filterItems(e.target.value);
          }}
          className={entries}
          value="entries"
        >
          Entradas
        </button>
        <button
          onClick={(e) => {
            filterItems(e.target.value);
          }}
          className={outputs}
          value="outputs"
        >
          Saidas
        </button>
      </div>
    </div>
  );
}
