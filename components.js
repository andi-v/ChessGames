class GameSelection extends React.Component {
    constructor(props) {
        super(props);
        this.handleChessSelection = this.handleChessSelection.bind(this);
        this.handleCheckersSelection = this.handleCheckersSelection.bind(this);
    }

    handleChessSelection() {
        var game = new Chess();
        this.props.onChessSelection(game);
    }

    handleCheckersSelection() {
        var game = new Checkers();
        this.props.onCheckersSelection(game);
    }

    render() {
        return (
            <div>
                <h2>Welcome. Please select the game you want to play:</h2>
                <input
                    type="button"
                    id="selectChess"
                    value="Chess"
                    onClick={this.handleChessSelection}
                />
                <input
                    type="button"
                    id="selectCheckers"
                    value="Checkers"
                    onClick={this.handleCheckersSelection}
                />
                <br/><br/>
            </div>
        );
    }
}

class PlayBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-container">
                <div className="8" style={{borderWidth: '0 1px 0 0'}}>8</div>
                <div className="8A">{this.props.board[8].A.toString()}</div>
                <div className="8B">{this.props.board[8].B.toString()}</div>  
                <div className="8C">{this.props.board[8].C.toString()}</div>
                <div className="8D">{this.props.board[8].D.toString()}</div>
                <div className="8E">{this.props.board[8].E.toString()}</div>
                <div className="8F">{this.props.board[8].F.toString()}</div>
                <div className="8G">{this.props.board[8].G.toString()}</div>
                <div className="8H">{this.props.board[8].H.toString()}</div>

                <div className="7" style={{borderWidth: '0 1px 0 0'}}>7</div>
                <div className="7A">{this.props.board[7].A.toString()}</div>
                <div className="7B">{this.props.board[7].B.toString()}</div>
                <div className="7C">{this.props.board[7].C.toString()}</div>  
                <div className="7D">{this.props.board[7].D.toString()}</div>
                <div className="7E">{this.props.board[7].E.toString()}</div>
                <div className="7F">{this.props.board[7].F.toString()}</div>
                <div className="7G">{this.props.board[7].G.toString()}</div>
                <div className="7H">{this.props.board[7].H.toString()}</div>

                <div className="6" style={{borderWidth: '0 1px 0 0'}}>6</div>
                <div className="6A">{this.props.board[6].A.toString()}</div>
                <div className="6B">{this.props.board[6].B.toString()}</div>
                <div className="6C">{this.props.board[6].C.toString()}</div>  
                <div className="6D">{this.props.board[6].D.toString()}</div>
                <div className="6E">{this.props.board[6].E.toString()}</div>
                <div className="6F">{this.props.board[6].F.toString()}</div>
                <div className="6G">{this.props.board[6].G.toString()}</div>
                <div className="6H">{this.props.board[6].H.toString()}</div>

                <div className="5" style={{borderWidth: '0 1px 0 0'}}>5</div>
                <div className="5A">{this.props.board[5].A.toString()}</div>
                <div className="5B">{this.props.board[5].B.toString()}</div>
                <div className="5C">{this.props.board[5].C.toString()}</div>  
                <div className="5D">{this.props.board[5].D.toString()}</div>
                <div className="5E">{this.props.board[5].E.toString()}</div>
                <div className="5F">{this.props.board[5].F.toString()}</div>
                <div className="5G">{this.props.board[5].G.toString()}</div>
                <div className="5H">{this.props.board[5].H.toString()}</div>

                <div className="4" style={{borderWidth: '0 1px 0 0'}}>4</div>
                <div className="4A">{this.props.board[4].A.toString()}</div>
                <div className="4B">{this.props.board[4].B.toString()}</div>
                <div className="4C">{this.props.board[4].C.toString()}</div>  
                <div className="4D">{this.props.board[4].D.toString()}</div>
                <div className="4E">{this.props.board[4].E.toString()}</div>
                <div className="4F">{this.props.board[4].F.toString()}</div>
                <div className="4G">{this.props.board[4].G.toString()}</div>
                <div className="4H">{this.props.board[4].H.toString()}</div>

                <div className="3" style={{borderWidth: '0 1px 0 0'}}>3</div>
                <div className="3A">{this.props.board[3].A.toString()}</div>
                <div className="3B">{this.props.board[3].B.toString()}</div>
                <div className="3C">{this.props.board[3].C.toString()}</div>  
                <div className="3D">{this.props.board[3].D.toString()}</div>
                <div className="3E">{this.props.board[3].E.toString()}</div>
                <div className="3F">{this.props.board[3].F.toString()}</div>
                <div className="3G">{this.props.board[3].G.toString()}</div>
                <div className="3H">{this.props.board[3].H.toString()}</div>

                <div className="2" style={{borderWidth: '0 1px 0 0'}}>2</div>
                <div className="2A">{this.props.board[2].A.toString()}</div>
                <div className="2B">{this.props.board[2].B.toString()}</div>
                <div className="2C">{this.props.board[2].C.toString()}</div>  
                <div className="2D">{this.props.board[2].D.toString()}</div>
                <div className="2E">{this.props.board[2].E.toString()}</div>
                <div className="2F">{this.props.board[2].F.toString()}</div>
                <div className="2G">{this.props.board[2].G.toString()}</div>
                <div className="2H">{this.props.board[2].H.toString()}</div>

                <div className="1" style={{borderWidth: '0 1px 0 0'}}>1</div>
                <div className="1A">{this.props.board[1].A.toString()}</div>
                <div className="1B">{this.props.board[1].B.toString()}</div>
                <div className="1C">{this.props.board[1].C.toString()}</div>  
                <div className="1D">{this.props.board[1].D.toString()}</div>
                <div className="1E">{this.props.board[1].E.toString()}</div>
                <div className="1F">{this.props.board[1].F.toString()}</div>
                <div className="1G">{this.props.board[1].G.toString()}</div>
                <div className="1H">{this.props.board[1].H.toString()}</div>

                <div className="0" style={{borderWidth: '0 0 0 0'}}> </div>
                <div className="A" style={{borderWidth: '1px 0 0 0'}}>A</div>
                <div className="B" style={{borderWidth: '1px 0 0 0'}}>B</div>
                <div className="C" style={{borderWidth: '1px 0 0 0'}}>C</div>  
                <div className="D" style={{borderWidth: '1px 0 0 0'}}>D</div>
                <div className="E" style={{borderWidth: '1px 0 0 0'}}>E</div>
                <div className="F" style={{borderWidth: '1px 0 0 0'}}>F</div>
                <div className="G" style={{borderWidth: '1px 0 0 0'}}>G</div>
                <div className="H" style={{borderWidth: '1px 0 0 0'}}>H</div>
            </div>
        );
    }
}

class MovesInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMoveButton() {

    }

    render() {
        return (
            <p>
                <label htmlFor="moveInput">WHITE Move: </label>
                <input 
                    type="text"
                    id="moveInput"
                />
                <input
                    type="button"
                    id="moveButton"
                    value="Move"
                    onClick={this.handleMoveButton}
                />
            </p>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [{},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""},
                    {A: "", B: "", C: "", D: "", E: "", F: "", G: "", H: ""}]
        }
        this.handleGameSelection = this.handleGameSelection.bind(this);
    }

    handleGameSelection(game) {
        this.setState({board: game.board.matrix})
    }

    render () {
        return (
            <div>
                <GameSelection
                    onChessSelection={this.handleGameSelection}
                    onCheckersSelection={this.handleGameSelection}
                />
                <PlayBoard
                    board={this.state.board}
                />
                <MovesInput/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);