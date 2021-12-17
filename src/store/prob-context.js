
import React from "react";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";

const PollContext = React.createContext({
    currentProblem: null,
    handleClick: () => { },
    handleStartClick: () => { }
});
export const PollContextProvider = (props) => {
    useEffect(() => {
        localStorage.setItem('current', 0);
    }, []);

    const [currentProblem, setCurrentProblem] = useState(localStorage.getItem('current'));

    const handleClick = () => {
        if (currentProblem <= 5) {
            localStorage.setItem('current', +currentProblem + 1);
            setCurrentProblem(localStorage.getItem('current'));
        }
    }

    const handleStartClick = () => {
        localStorage.setItem('current', +currentProblem + 1);
        setCurrentProblem(localStorage.getItem('current'))
    }


    const contextValue = {
        currentProblem: currentProblem,
        handleClick: handleClick,
        handleStartClick: handleStartClick

    };

    return (
        <PollContext.Provider value={contextValue}>
            {props.children}
        </PollContext.Provider>
    );
};

export default PollContext;
