import { useContext, useState } from "react";
import { Button } from "@mui/material";
import Btn from "./components/Button";
import Timer from "./components/Timer"
import Container from "./components/Container";
import PollContext from "./store/prob-context";


const App = () => {
  const ctx = useContext(PollContext);
  const handleBtnClick = () => {
    ctx.handleStartClick();
    ctx.setDisabled();
    ctx.setTimer();
  }
  return (
    <div className='app' >
      <h1 className="header" >Problematic</h1>
      <Container />
      {
        ctx.showTimer === true &&
        <Timer />
      }


      <div className="btn-container" >
        <Button onClick={handleBtnClick} className='timer-btn' variant='contained' disabled={ctx.dis} color='secondary'  > Start </Button>
        <Button onClick={ctx.handleClick} className='timer-btn' variant='contained' disabled={!ctx.dis} color='primary'  > Next </Button>
      </div>
    </div>
  )
}

export default App
