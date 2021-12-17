
import React from "react";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";

const PollContext = React.createContext({
    currentProblem: null,
    handleClick: () => { },
    handleStartClick: () => { },
    dis: null,
    setDisabled: () => { },
    showTimer: null,
    setTimer: () => { }
});
export const PollContextProvider = (props) => {
    useEffect(() => {
        localStorage.setItem('current', 0);
    }, []);

    const [dis, setDis] = useState(false);
    const [currentProblem, setCurrentProblem] = useState(0);
    const [showTimer, setShowTimer] = useState(false);


    const handleClick = () => {
        if (currentProblem <= 3) {
            setCurrentProblem(currentProblem + 1);
        }
    }

    const handleStartClick = () => {
        setCurrentProblem(1)
    }

    const setDisabled = () => {
        setDis(true);
    }
    const setTimer = () => {
        if (showTimer !== true) {
            setShowTimer(true);
        }

    }


    const contextValue = {
        currentProblem: currentProblem,
        handleClick: handleClick,
        handleStartClick: handleStartClick,
        dis: dis,
        setDisabled: setDisabled,
        showTimer: showTimer,
        setTimer: setTimer

    };

    return (
        <PollContext.Provider value={contextValue}>
            {props.children}
        </PollContext.Provider>
    );
};

export default PollContext;
