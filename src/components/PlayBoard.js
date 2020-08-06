import React, { Component } from 'react'

class PlayBoard extends Component {
    state = {
        clickNumber: 1
    }

    handlePieceClick = (e) => {
        this.props.onPieceClick(e.target.className, this.state.clickNumber);
        if (this.state.clickNumber === 2) {
            this.setState({ clickNumber: 1 })
        }
        else this.setState({ clickNumber: 2 })
    }

    createSquare = (className, row, col) => {
        return (
            <div
                key={className}
                className={className}
                onClick={this.handlePieceClick}>
                {this.props.board[row][col].toString(this.props.game, this.props.representation)}
            </div>
        )
    }

    generateBoard = () => {
        let squares = [];
        const nrToLetter = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H" };

        for (let row = 8; row >= 1; row--) {
            squares.push(
                <div key={row} className="row" style={{ borderWidth: '0 1px 0 0' }}>
                    {row}
                </div>
            );
            for (let col = 1; col <= 8; col++) {
                squares.push(this.createSquare(row + nrToLetter[col], row, col));
            }
        }
        return squares;
    }

    render() {
        return (
            <div className="grid-container">
                {this.generateBoard()}

                <div className="column" style={{ borderWidth: '0 0 0 0' }}> </div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>A</div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>B</div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>C</div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>D</div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>E</div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>F</div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>G</div>
                <div className="column" style={{ borderWidth: '1px 0 0 0' }}>H</div>
            </div>
        );
    }
}

export default PlayBoard