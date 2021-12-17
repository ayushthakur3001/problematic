import Puzzle from '../puzzle';
import Jigsaw from '../Jigsaw';
import Tower from '../Tower';
import Sudoku from '../Sudoku';
import Queens from '../Queens';
import Btn from '../Button';
import { useState, useEffect, useContext } from "react";
import { Button } from '@mui/material';
import Timer from '../Timer';
import PollContext from '../../store/prob-context';


const Container = () => {
    const ctx = useContext(PollContext);
    const handleBtnClick = () => {
        ctx.handleStartClick();
        ctx.setDisabled();
        ctx.setTimer();
    }
    return (
        <div className="container">

            {
                ctx.currentProblem == 1 &&
                <Puzzle />
            }
            {
                ctx.currentProblem == 2 &&
                <Tower />
            }
            {
                ctx.currentProblem == 3 &&
                <Sudoku />
            }
            {/* {
                ctx.currentProblem == 4 &&
                <Queens />
            }
            {
                ctx.currentProblem == 5 &&
                <Jigsaw />
            } */}
            {
                ctx.currentProblem == 4 &&
                <h1> Thank You </h1>
            }
        </div>
    )
}

export default Container
