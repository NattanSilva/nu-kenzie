import "./Filter.css";

export function Filter({ setFiltered, actualList }) {
  function filterItems(itemType) {
    if (itemType === "all") {
      setFiltered(actualList);
      console.log("Entrou no if!");
    } else if (itemType === "entries") {
      setFiltered(actualList.filter(({ type }) => type === "Entrada"));
      console.log("Entrou no primeiro else if!");
    } else if (itemType === "outputs") {
      setFiltered(actualList.filter(({ type }) => type === "Despesa"));
      console.log("Entrou no segundo else if!");
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
          className="btn__filter active"
          value="all"
        >
          Todos
        </button>
        <button
          onClick={(e) => {
            filterItems(e.target.value);
          }}
          className="btn__filter"
          value="entries"
        >
          Entradas
        </button>
        <button
          onClick={(e) => {
            filterItems(e.target.value);
          }}
          className="btn__filter"
          value="outputs"
        >
          Saidas
        </button>
      </div>
    </div>
  );
}
