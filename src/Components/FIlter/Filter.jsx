import "./Filter.css";

export function Filter({category}) {
  return (
    <div className="filter__container">
      <h3 className="filter__titile">Resumo Financeiro</h3>
      <div className="filter__btn__container">
        <button className="btn__filter active" value="all">Todos</button>
        <button className="btn__filter" value="entries">Entradas</button>
        <button className="btn__filter" value="outputs">Saidas</button>
      </div>
    </div>
  )
}