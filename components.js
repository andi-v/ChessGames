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

    square(className, row, col) {
        return <div key={className} className={className} onClick={this.handlePieceClick}>{this.props.board[row][col].toString(this.props.game, this.props.representation)}</div>;
    }

    generateBoard() {
        let squares = [];
        const nrToLetter = {1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H"};

        for (let row = 8; row >=1; row--) {
            squares.push(<div key={row} className="row" style={{borderWidth: '0 1px 0 0'}}>{row}</div>);
            for (let col = 1; col <=8; col++) {
                squares.push(this.square(row + nrToLetter[col], row, col));
            }
        }
        return squares;
    }

    render() {
        return (
            <div className="grid-container">
                {this.generateBoard()}

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
        this.setState({board: this.game.board.matrix, game: "Chess", currentPlayer: "WHITE"});
    }

    handleCheckersClick() {
        this.game = new Checkers();
        this.setState({board: this.game.board.matrix, game: "Checkers", currentPlayer: "WHITE"});
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