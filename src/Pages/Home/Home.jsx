import { NavBar } from "../../Components/NavBar/NavBar";
import "./Home.css";

function Home({ pageReturn }) {
  return (
    <section className="home">
      <NavBar page={pageReturn}/>
    </section>
  )
}

export default Home;