import { useState } from "react";
import Btn from "./components/Button";
import Timer from "./components/Timer"
import Container from "./components/Container";


const App = () => {

  return (
    <div className='app' >
      <h1 className="header" >Problematic</h1>
      <Container />
      <Timer />
    </div>
  )
}

export default App
