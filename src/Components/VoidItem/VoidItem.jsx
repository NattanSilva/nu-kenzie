import "./VoidItem.css";

export function VoidItem() {
  return (
    <li className="void__container">
      <h3 className="item__title">Você ainda não possui nenhum lançamento</h3>
      <img className="no__card__image" src="src/Assets/images/NoCard.svg" alt="Sem Itens" />
      <img className="no__card__image" src="src/Assets/images/NoCard.svg" alt="Sem Itens" />
      <img className="no__card__image" src="src/Assets/images/NoCard.svg" alt="Sem Itens" />
    </li>
  )
}