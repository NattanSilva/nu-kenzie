import { useState } from "react";

function Home({pageReturn}) {
  return (
    <button onClick={() => {
      pageReturn("firstPage")
    }}>Voltar</button>
  )
}

export default Home;
