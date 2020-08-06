import React from 'react'

const movesInput = (props) => (
    <div>
        <div>
            <label htmlFor="moveInput">{props.currentPlayer} Move: </label>
            <input
                type="text"
                id="moveInput"
                value={props.move}
                onChange={(event) => props.onMoveChange(event.target.value)}
            />
            <input
                type="button"
                id="moveButton"
                value="Move"
                onClick={props.onMoveClick}
            />
            <div>(ex: 6D3A)</div>
        </div>
        
        <p id="moveResult">{props.moveResult}</p>
    </div>
)

export default movesInput