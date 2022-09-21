import { useState } from "react";
import { Filter } from "../../Components/FIlter/Filter";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Recorder } from "../../Components/Recorder/Recorder";
import "./Home.css";

function Home({ pageReturn }) {
  const [dataBase, setDataBase] = useState([]);

  return (
    <section className="home">
      <NavBar page={pageReturn} />
      <main className="main__container">
        <Recorder />
        <section>
          <Filter />
        </section>
      </main>
    </section>
  );
}

export default Home;
