class GameSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="GameSelection-container">
                <h2>Welcome! Please select the game you want to play:</h2>
                <input
                    type="button"
                    id="selectChess"
                    value="Chess"
                    onClick={this.props.onChessClick}
                />
                <input
                    type="button"
                    id="selectCheckers"
                    value="Checkers"
                    onClick={this.props.onCheckersClick}
                />
                <input
                    type="button"
                    id="letters"
                    value="Letters"
                    onClick={this.props.onLettersClick}
                />
                <input
                    type="button"
                    id="symbols"
                    value="Symbols"
                    onClick={this.props.onSymbolsClick}
                />
                <br/><br/>
            </div>
        );
    }
}

class PlayBoard extends React.Component {
    constructor(props) {
        super(props);
        this.click = 1;
        this.handlePieceClick = this.handlePieceClick.bind(this);
    }

    handlePieceClick(e) {
        this.props.onPieceClick(e.target.className, this.click);
        if (this.click == 2) this.click = 1;
        else this.click++;
    }

    render() {
        return (
            <div className="grid-container">
                <div className="row" style={{borderWidth: '0 1px 0 0'}}>8</div>
                <div className="8A" onClick={this.handlePieceClick}>{this.props.board[8][1].toString(this.props.game, this.props.representation)}</div>
                <div className="8B" onClick={this.handlePieceClick}>{this.props.board[8][2].toString(this.props.game, this.props.representation)}</div>  
                <div className="8C" onClick={this.handlePieceClick}>{this.props.board[8][3].toString(this.props.game, this.props.representation)}</div>
                <div className="8D" onClick={this.handlePieceClick}>{this.props.board[8][4].toString(this.props.game, this.props.representation)}</div>
                <div className="8E" onClick={this.handlePieceClick}>{this.props.board[8][5].toString(this.props.game, this.props.representation)}</div>
                <div className="8F" onClick={this.handlePieceClick}>{this.props.board[8][6].toString(this.props.game, this.props.representation)}</div>
                <div className="8G" onClick={this.handlePieceClick}>{this.props.board[8][7].toString(this.props.game, this.props.representation)}</div>
                <div className="8H" onClick={this.handlePieceClick}>{this.props.board[8][8].toString(this.props.game, this.props.representation)}</div>

                <div className="row" style={{borderWidth: '0 1px 0 0'}}>7</div>
                <div className="7A" onClick={this.handlePieceClick}>{this.props.board[7][1].toString(this.props.game, this.props.representation)}</div>
                <div className="7B" onClick={this.handlePieceClick}>{this.props.board[7][2].toString(this.props.game, this.props.representation)}</div>
                <div className="7C" onClick={this.handlePieceClick}>{this.props.board[7][3].toString(this.props.game, this.props.representation)}</div>  
                <div className="7D" onClick={this.handlePieceClick}>{this.props.board[7][4].toString(this.props.game, this.props.representation)}</div>
                <div className="7E" onClick={this.handlePieceClick}>{this.props.board[7][5].toString(this.props.game, this.props.representation)}</div>
                <div className="7F" onClick={this.handlePieceClick}>{this.props.board[7][6].toString(this.props.game, this.props.representation)}</div>
                <div className="7G" onClick={this.handlePieceClick}>{this.props.board[7][7].toString(this.props.game, this.props.representation)}</div>
                <div className="7H" onClick={this.handlePieceClick}>{this.props.board[7][8].toString(this.props.game, this.props.representation)}</div>

                <div className="row" style={{borderWidth: '0 1px 0 0'}}>6</div>
                <div className="6A" onClick={this.handlePieceClick}>{this.props.board[6][1].toString(this.props.game, this.props.representation)}</div>
                <div className="6B" onClick={this.handlePieceClick}>{this.props.board[6][2].toString(this.props.game, this.props.representation)}</div>
                <div className="6C" onClick={this.handlePieceClick}>{this.props.board[6][3].toString(this.props.game, this.props.representation)}</div>  
                <div className="6D" onClick={this.handlePieceClick}>{this.props.board[6][4].toString(this.props.game, this.props.representation)}</div>
                <div className="6E" onClick={this.handlePieceClick}>{this.props.board[6][5].toString(this.props.game, this.props.representation)}</div>
                <div className="6F" onClick={this.handlePieceClick}>{this.props.board[6][6].toString(this.props.game, this.props.representation)}</div>
                <div className="6G" onClick={this.handlePieceClick}>{this.props.board[6][7].toString(this.props.game, this.props.representation)}</div>
                <div className="6H" onClick={this.handlePieceClick}>{this.props.board[6][8].toString(this.props.game, this.props.representation)}</div>

                <div className="row" style={{borderWidth: '0 1px 0 0'}}>5</div>
                <div className="5A" onClick={this.handlePieceClick}>{this.props.board[5][1].toString(this.props.game, this.props.representation)}</div>
                <div className="5B" onClick={this.handlePieceClick}>{this.props.board[5][2].toString(this.props.game, this.props.representation)}</div>
                <div className="5C" onClick={this.handlePieceClick}>{this.props.board[5][3].toString(this.props.game, this.props.representation)}</div>  
                <div className="5D" onClick={this.handlePieceClick}>{this.props.board[5][4].toString(this.props.game, this.props.representation)}</div>
                <div className="5E" onClick={this.handlePieceClick}>{this.props.board[5][5].toString(this.props.game, this.props.representation)}</div>
                <div className="5F" onClick={this.handlePieceClick}>{this.props.board[5][6].toString(this.props.game, this.props.representation)}</div>
                <div className="5G" onClick={this.handlePieceClick}>{this.props.board[5][7].toString(this.props.game, this.props.representation)}</div>
                <div className="5H" onClick={this.handlePieceClick}>{this.props.board[5][8].toString(this.props.game, this.props.representation)}</div>

                <div className="row" style={{borderWidth: '0 1px 0 0'}}>4</div>
                <div className="4A" onClick={this.handlePieceClick}>{this.props.board[4][1].toString(this.props.game, this.props.representation)}</div>
                <div className="4B" onClick={this.handlePieceClick}>{this.props.board[4][2].toString(this.props.game, this.props.representation)}</div>
                <div className="4C" onClick={this.handlePieceClick}>{this.props.board[4][3].toString(this.props.game, this.props.representation)}</div>  
                <div className="4D" onClick={this.handlePieceClick}>{this.props.board[4][4].toString(this.props.game, this.props.representation)}</div>
                <div className="4E" onClick={this.handlePieceClick}>{this.props.board[4][5].toString(this.props.game, this.props.representation)}</div>
                <div className="4F" onClick={this.handlePieceClick}>{this.props.board[4][6].toString(this.props.game, this.props.representation)}</div>
                <div className="4G" onClick={this.handlePieceClick}>{this.props.board[4][7].toString(this.props.game, this.props.representation)}</div>
                <div className="4H" onClick={this.handlePieceClick}>{this.props.board[4][8].toString(this.props.game, this.props.representation)}</div>

                <div className="row" style={{borderWidth: '0 1px 0 0'}}>3</div>
                <div className="3A" onClick={this.handlePieceClick}>{this.props.board[3][1].toString(this.props.game, this.props.representation)}</div>
                <div className="3B" onClick={this.handlePieceClick}>{this.props.board[3][2].toString(this.props.game, this.props.representation)}</div>
                <div className="3C" onClick={this.handlePieceClick}>{this.props.board[3][3].toString(this.props.game, this.props.representation)}</div>  
                <div className="3D" onClick={this.handlePieceClick}>{this.props.board[3][4].toString(this.props.game, this.props.representation)}</div>
                <div className="3E" onClick={this.handlePieceClick}>{this.props.board[3][5].toString(this.props.game, this.props.representation)}</div>
                <div className="3F" onClick={this.handlePieceClick}>{this.props.board[3][6].toString(this.props.game, this.props.representation)}</div>
                <div className="3G" onClick={this.handlePieceClick}>{this.props.board[3][7].toString(this.props.game, this.props.representation)}</div>
                <div className="3H" onClick={this.handlePieceClick}>{this.props.board[3][8].toString(this.props.game, this.props.representation)}</div>

                <div className="row" style={{borderWidth: '0 1px 0 0'}}>2</div>
                <div className="2A" onClick={this.handlePieceClick}>{this.props.board[2][1].toString(this.props.game, this.props.representation)}</div>
                <div className="2B" onClick={this.handlePieceClick}>{this.props.board[2][2].toString(this.props.game, this.props.representation)}</div>
                <div className="2C" onClick={this.handlePieceClick}>{this.props.board[2][3].toString(this.props.game, this.props.representation)}</div>  
                <div className="2D" onClick={this.handlePieceClick}>{this.props.board[2][4].toString(this.props.game, this.props.representation)}</div>
                <div className="2E" onClick={this.handlePieceClick}>{this.props.board[2][5].toString(this.props.game, this.props.representation)}</div>
                <div className="2F" onClick={this.handlePieceClick}>{this.props.board[2][6].toString(this.props.game, this.props.representation)}</div>
                <div className="2G" onClick={this.handlePieceClick}>{this.props.board[2][7].toString(this.props.game, this.props.representation)}</div>
                <div className="2H" onClick={this.handlePieceClick}>{this.props.board[2][8].toString(this.props.game, this.props.representation)}</div>

                <div className="row" style={{borderWidth: '0 1px 0 0'}}>1</div>
                <div className="1A" onClick={this.handlePieceClick}>{this.props.board[1][1].toString(this.props.game, this.props.representation)}</div>
                <div className="1B" onClick={this.handlePieceClick}>{this.props.board[1][2].toString(this.props.game, this.props.representation)}</div>
                <div className="1C" onClick={this.handlePieceClick}>{this.props.board[1][3].toString(this.props.game, this.props.representation)}</div>  
                <div className="1D" onClick={this.handlePieceClick}>{this.props.board[1][4].toString(this.props.game, this.props.representation)}</div>
                <div className="1E" onClick={this.handlePieceClick}>{this.props.board[1][5].toString(this.props.game, this.props.representation)}</div>
                <div className="1F" onClick={this.handlePieceClick}>{this.props.board[1][6].toString(this.props.game, this.props.representation)}</div>
                <div className="1G" onClick={this.handlePieceClick}>{this.props.board[1][7].toString(this.props.game, this.props.representation)}</div>
                <div className="1H" onClick={this.handlePieceClick}>{this.props.board[1][8].toString(this.props.game, this.props.representation)}</div>

                <div className="column" style={{borderWidth: '0 0 0 0'}}> </div>
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>A</div>
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>B</div>
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>C</div>  
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>D</div>
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>E</div>
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>F</div>
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>G</div>
                <div className="column" style={{borderWidth: '1px 0 0 0'}}>H</div>
            </div>
        );
    }
}

class MovesInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleMoveChange = this.handleMoveChange.bind(this);
    }

    handleMoveChange(e) {
        this.props.onMoveChange(e.target.value);
    }

    render() {
        return (
            <div>
                <p>
                    <label htmlFor="moveInput">{this.props.currentPlayer} Move: </label>
                    <input 
                        type="text"
                        id="moveInput"
                        value={this.props.move}
                        onChange={this.handleMoveChange}
                    />
                    <input
                        type="button"
                        id="moveButton"
                        value="Move"
                        onClick={this.props.onMoveClick}
                    />
                </p>
                <p id="moveResult">{this.props.moveResult}</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.handleChessClick = this.handleChessClick.bind(this);
        this.handleCheckersClick = this.handleCheckersClick.bind(this);
        this.handleLettersClick = this.handleLettersClick.bind(this);
        this.handleSymbolsClick = this.handleSymbolsClick.bind(this);
        this.handleMoveChange = this.handleMoveChange.bind(this);
        this.handlePieceClick = this.handlePieceClick.bind(this);
        this.handleMoveClick = this.handleMoveClick.bind(this);
    }

    handleChessClick() {
        this.game = new Chess();
        this.setState({board: this.game.board.matrix, game: "Chess"});
    }

    handleCheckersClick() {
        this.game = new Checkers();
        this.setState({board: this.game.board.matrix, game: "Checkers"});
    }

    handleLettersClick() {
        this.setState({representation: "letters"})
    }

    handleSymbolsClick() {
        this.setState({representation: "symbols"})
    }

    handleMoveChange(newValue) {
        this.setState({move: newValue});
    }

    handlePieceClick(position, click) {
        if (click == 1) this.setState({move: position});
        else {
            const newState = this.state.move + position;
            this.setState({move: newState}, () => {
                this.handleMoveClick();
            });
        }
    }

    handleMoveClick() {
        const letterNumber = {A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8}
        let newMove = this.state.move.substr(0,1) + 
                        letterNumber[this.state.move.substr(1,1).toUpperCase()] +
                        this.state.move.substr(2,1) +
                        letterNumber[this.state.move.substr(3,1).toUpperCase()];
        const moveResult = this.game.tryMove(newMove, this.state.currentPlayer);
        if (moveResult == "MOVE DONE") {
            this.setState({moveResult: ""});
            if (this.state.currentPlayer == "WHITE")
                this.setState({currentPlayer: "BLACK"});
            else this.setState({currentPlayer: "WHITE"});
        }
        else if (moveResult == "PARTIAL CAPTURE") {
            this.setState({moveResult: "PARTIAL CAPTURE"});
        }
        else this.setState({moveResult: "INVALID MOVE"});
        this.setState({move: ""});
        this.setState({board: this.game.board.matrix});
    }

    render () {
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

ReactDOM.render(
    <App />,
    document.getElementById('container')
);