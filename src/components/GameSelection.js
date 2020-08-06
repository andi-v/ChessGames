import React from 'react'

const gameSelection = (props) => (
    <div className="GameSelection-container">
        <h2>Welcome! Please select the game you want to play:</h2>
        <input
            type="button"
            id="selectChess"
            value="Chess"
            onClick={props.onChessClick}
        />
        <input
            type="button"
            id="selectCheckers"
            value="Checkers"
            onClick={props.onCheckersClick}
        />
        <input
            type="button"
            id="letters"
            value="Letters"
            onClick={props.onLettersClick}
        />
        <input
            type="button"
            id="symbols"
            value="Symbols"
            onClick={props.onSymbolsClick}
        />
        <br /><br />
    </div>
)

export default gameSelection