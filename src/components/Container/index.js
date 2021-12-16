import Puzzle from '../puzzle';
import Jigsaw from '../Jigsaw';
import Tower from '../Tower';
import Sudoku from '../Sudoku';
import Queens from '../Queens';
import Btn from '../Button';
import { useState } from "react";


const Container = () => {
    const [currentProblem, setCurrentProblem] = useState(1);
    const handleClick = () => {
        if (currentProblem <= 4) {
            setCurrentProblem(currentProblem + 1);
        }
    }
    return (
        <div className="container">

            {
                currentProblem == 1 &&
                <Puzzle />
            }
            {
                currentProblem == 2 &&
                <Tower />
            }
            {
                currentProblem == 3 &&
                <Sudoku />
            }
            {
                currentProblem == 4 &&
                <Queens />
            }
            {
                currentProblem == 5 &&
                <Jigsaw />
            }

            <Btn handleClick={handleClick} />


        </div>
    )
}

export default Container
