import "./style.scss";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useEffect, useState } from "react";
import { Button } from '@mui/material';
import Countdown from "react-countdown";
const Timer = ({ handleClick }) => {
    const seconds = 20 * 60 * 1000;
    const Completionist = () => <span>Time Over!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>;
        }
    };

    return (
        <div className="timer" >
            <h1>Remaining Time</h1>
            <CountdownCircleTimer
                isPlaying
                duration={20 * 60}
                colors={[
                    ['#1976D2', 0.33],
                ]}
            >
                <Countdown className="countdown" date={Date.now() + seconds} renderer={renderer} />
            </CountdownCircleTimer>
        </div>
    )
}

export default Timer
