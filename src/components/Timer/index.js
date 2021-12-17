import "./style.scss";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useContext, useEffect, useState } from "react";
import { Button } from '@mui/material';
import Countdown from "react-countdown";
import PollContext from "../../store/prob-context";
const Timer = () => {
    const ctx = useContext(PollContext);
    const [seconds, setSeconds] = useState(20 * 60 * 1000)
    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds - 1000);
        }, 1000);
    }, [seconds])
    localStorage.setItem('seconds', seconds);
    const Completionist = () => <span>Time Over!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <span>{minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>;
        }
    };
    return (
        <div className="timer" >

            <h1>Remaining Time</h1>
            <Countdown className="countdown" date={Date.now() + seconds} renderer={renderer} />
        </div>
    )
}

export default Timer
