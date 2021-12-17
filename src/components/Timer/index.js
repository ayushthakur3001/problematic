import "./style.scss";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useContext, useEffect, useState } from "react";
import { Button } from '@mui/material';
import Countdown from "react-countdown";
import PollContext from "../../store/prob-context";
const Timer = () => {
    const ctx = useContext(PollContext);
    const [dis, setDis] = useState(false);
    const [showTimer, setShowTimer] = useState(false);
    const [current, setCurrent] = useState(localStorage.getItem('current'));
    const seconds = 20 * 60 * 1000;
    const Completionist = () => <span>Time Over!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        setCurrent(localStorage.getItem('current'));
        if (completed) {
            return <Completionist />;
        } else {
            return <span>{minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>;
        }
    };

    const noRenderer = ({ hours, minutes, seconds, completed }) => {
        return <span> 20 : 00 </span>;

    };

    const setDisabled = () => {
        setDis(true)
        setShowTimer(true)
    }

    const handleBtnClick = () => {
        ctx.handleStartClick();
        setDisabled();
    }



    return (
        <div className="timer" >
            <Button onClick={handleBtnClick} className='timer-btn' variant='contained' disabled={dis} color='secondary'  > Start </Button>
            <Button onClick={ctx.handleClick} className='timer-btn' variant='contained' disabled={!dis} color='primary'  > Next </Button>
            <h1>Remaining Time</h1>
            {
                showTimer &&
                <Countdown className="countdown" date={Date.now() + seconds} renderer={renderer} />

            }
            {
                !showTimer &&
                <Countdown className="countdown" date={Date.now() + 0} renderer={noRenderer} />

            }
        </div>
    )
}

export default Timer
