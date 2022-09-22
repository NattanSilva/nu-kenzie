import { useState } from "react";
import { CardItem } from "../../Components/CardItem/CardItem";
import { Filter } from "../../Components/FIlter/Filter";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Recorder } from "../../Components/Recorder/Recorder";
import { Total } from "../../Components/Total/Total";
import { VoidItem } from "../../Components/VoidItem/VoidItem";
import "./Home.css";

function Home({ pageReturn }) {
  const [dataBase, setDataBase] = useState([]);

  return (
    <section className="home">
      <NavBar page={pageReturn} />
      <main className="main__container">
        <div className="left__container">
          <Recorder setDataBase={setDataBase} />
          <Total
            totalValue={dataBase
              .reduce((acm, act) => acm + act.value, 0)
              .toFixed(2)
              .replaceAll(".", ",")}
          />
        </div>
        <section>
          <Filter />
          <ul>
            {dataBase.length == 0 ? (
              <VoidItem />
            ) : (
              dataBase.map((el, index) => {
                return (
                  <CardItem
                    setDataBase={setDataBase}
                    key={index}
                    index={index}
                    title={el.title}
                    type={el.type}
                    value={el.value.toFixed(2).replaceAll(".", ",")}
                  />
                );
              })
            )}
          </ul>
        </section>
      </main>
    </section>
  );
}

export default Home;
