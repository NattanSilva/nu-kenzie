import { useState } from "react";
import { CardItem } from "../../Components/CardItem/CardItem";
import { Filter } from "../../Components/FIlter/Filter";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Recorder } from "../../Components/Recorder/Recorder";
import { VoidItem } from "../../Components/VoidItem/VoidItem";
import "./Home.css";

function Home({ pageReturn }) {
  const [dataBase, setDataBase] = useState([
    {
      title: "Salário - Mês Dezembro",
      type: "Entrada",
      value: 6660.00
    },
    {
      title: "Compra - Camiseta Preta",
      type: "Despesa",
      value: 60.00
    }
  ]);

  return (
    <section className="home">
      <NavBar page={pageReturn} />
      <main className="main__container">
        <Recorder />
        <section>
          <Filter />
          <ul>
            {dataBase.length == 0 ? <VoidItem /> : dataBase.map((el, index) => {
              return <CardItem key={index} title={el.title} type={el.type} value={el.value.toFixed(2).replaceAll("." , ",")}/>
            })}
          </ul>
        </section>
      </main>
    </section>
  );
}

export default Home;
