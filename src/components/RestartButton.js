import React from 'react';

import "./RestartButton.css";

export const RestartButton = ({ restartGame }) => {
    return (
        <button className="restart-btn" onClick={restartGame}>Restart</button>
    )
}
