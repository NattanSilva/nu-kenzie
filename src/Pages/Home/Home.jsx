import { useState } from "react";
import { Filter } from "../../Components/FIlter/Filter";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Recorder } from "../../Components/Recorder/Recorder";
import { VoidItem } from "../../Components/VoidItem/VoidItem";
import "./Home.css";

function Home({ pageReturn }) {
  const [dataBase, setDataBase] = useState([]);

  function renderList() {
    return dataBase.length === 0 ? <VoidItem /> : null;
  }

  return (
    <section className="home">
      <NavBar page={pageReturn} />
      <main className="main__container">
        <Recorder />
        <section>
          <Filter />
          <ul>
            {renderList()}
          </ul>
        </section>
      </main>
    </section>
  );
}

export default Home;
