import { NavBar } from "../../Components/NavBar/NavBar";
import { Recorder } from "../../Components/Recorder/Recorder";
import "./Home.css";

function Home({ pageReturn }) {
  return (
    <section className="home">
      <NavBar page={pageReturn}/>
      <main className="main__container">
        <Recorder />
      </main>
    </section>
  )
}

export default Home;