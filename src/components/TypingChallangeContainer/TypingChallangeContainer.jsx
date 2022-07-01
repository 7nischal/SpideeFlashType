import React from "react";
import './TypingChallangeContainer.css';
import ChallangeDetailsCard from '../ChallangeDetailsCard/ChallangeDetailsCard';
import TypingChallange from "../TypingChallange/TypingChallange";

const TypingChallangeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
}) => {
    return (
        <div className="typing-challange-container">
            {/* Details Section */}

            <div className="details-container">
                {/* Words Typed */}
                <ChallangeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters Typed */}
                <ChallangeDetailsCard cardName="Characters" cardValue={characters} />

                {/* Speed */}
                <ChallangeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>

            {/* The Real Challange */}
            <div className="typewriter-container">
                <TypingChallange
                    testInfo={testInfo}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    selectedParagraph={selectedParagraph}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    );
}

export default TypingChallangeContainer;