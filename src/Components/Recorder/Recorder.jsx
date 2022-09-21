import "./Recorder.css";

export function Recorder() {
  return (
    <form className="recorder__container">
      <label className="recorder__title">Descrição</label>
      <input id="description__input" type="text" placeholder="Digite aqui sua descrição" />
      <label className="recorder__sugestion">Ex: Compra de roupas</label>
      <div>
      </div>
    </form>
  )
}