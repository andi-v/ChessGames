import React, { Component } from 'react'
import Chess from './classes/Chess'
import Checkers from './classes/Checkers'
import GameSelection from './components/GameSelection'
import PlayBoard from './components/PlayBoard'
import MovesInput from './components/MovesInput'
import './App.css';

class App extends Component {
    state = {
        board: [[], ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""]],
        representation: "symbols",
        game: "",
        currentPlayer: "WHITE",
        move: "",
        moveResult: ""
    }

    handleChessClick = () => {
        this.game = new Chess();
        this.setState({ board: this.game.board.matrix, game: "Chess", currentPlayer: "WHITE" });
    }

    handleCheckersClick = () => {
        this.game = new Checkers();
        this.setState({ board: this.game.board.matrix, game: "Checkers", currentPlayer: "WHITE" });
    }

    handleLettersClick = () => {
        this.setState({ representation: "letters" })
    }

    handleSymbolsClick = () => {
        this.setState({ representation: "symbols" })
    }

    handleMoveChange = (newValue) => {
        this.setState({ move: newValue.replace(/ /g, '') });
    }

    handlePieceClick = (position, click) => {
        if (click === 1) this.setState({ move: position });
        else {
            const newState = this.state.move + position;
            this.setState({ move: newState }, () => {
                this.handleMoveClick();
            });
        }
    }

    handleMoveClick = () => {
        const letterToNumber = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 }
        let newState = this.state;
        let newMove = this.state.move.substr(0, 1) +
            letterToNumber[this.state.move.substr(1, 1).toUpperCase()] +
            this.state.move.substr(2, 1) +
            letterToNumber[this.state.move.substr(3, 1).toUpperCase()];

        let moveResult = "";
        if (newMove.length === 4) {
            moveResult = this.game.tryMove(newMove, this.state.currentPlayer);
        }
        
        if (moveResult === "MOVE DONE") {
            newState.moveResult = "";
            if (this.state.currentPlayer === "WHITE")
                newState.currentPlayer = "BLACK";
            else newState.currentPlayer = "WHITE";
        }
        else if (moveResult === "PARTIAL CAPTURE") {
            newState.moveResult = "PARTIAL CAPTURE";
        }
        else newState.moveResult = "INVALID MOVE";
        newState.move = "";
        newState.board = this.game.board.matrix;
        this.setState(newState);
    }

    render() {
        return (
            <div className="flex-container">
                <GameSelection
                    onChessClick={this.handleChessClick}
                    onCheckersClick={this.handleCheckersClick}
                    onLettersClick={this.handleLettersClick}
                    onSymbolsClick={this.handleSymbolsClick}
                />
                <PlayBoard
                    board={this.state.board}
                    onPieceClick={this.handlePieceClick}
                    game={this.state.game}
                    representation={this.state.representation}
                />
                <br></br>
                <MovesInput
                    currentPlayer={this.state.currentPlayer}
                    move={this.state.move}
                    onMoveChange={this.handleMoveChange}
                    onMoveClick={this.handleMoveClick}
                    moveResult={this.state.moveResult}
                />
            </div>
        );
    }
}

export default App;
