class Checkers extends Game {
    constructor() {
        super();
        this.board = new Board(8, 8);
        this.createInitialMatrix();
        this.captureInProgress = false;;
    }
    
    createInitialMatrix() {
        let m = this.board.matrix;
        m[1][1] = new Pawn("white");
        m[1][3] = new Pawn("white");
        m[1][5] = new Pawn("white");
        m[1][7] = new Pawn("white");
        m[2][2] = new Pawn("white");
        m[2][4] = new Pawn("white");
        m[2][6] = new Pawn("white");
        m[2][8] = new Pawn("white");
        m[3][1] = new Pawn("white");
        m[3][3] = new Pawn("white");
        m[3][5] = new Pawn("white");
        m[3][7] = new Pawn("white");

        m[6][2] = new Pawn("black");
        m[6][4] = new Pawn("black");
        m[6][6] = new Pawn("black");
        m[6][8] = new Pawn("black");
        m[7][1] = new Pawn("black");
        m[7][3] = new Pawn("black");
        m[7][5] = new Pawn("black");
        m[7][7] = new Pawn("black");
        m[8][2] = new Pawn("black");
        m[8][4] = new Pawn("black");
        m[8][6] = new Pawn("black");
        m[8][8] = new Pawn("black");
    }

    range(nr1, nr2) {
        if (nr1 < nr2)
            return (new Array(nr2 - nr1)).fill(undefined).map((_, i) => i + Number(nr1));
        else return (new Array(nr1 - nr2)).fill(undefined).map((_, i) => Number(nr1) - i);
    }

    findCaptureLeftUpCorner(row, col, color) {
        if ((row < 7) && (col > 2))
            return (this.board.matrix[row+1][col-1] && 
                (this.board.matrix[row+1][col-1].color == color) &&
                this.board.matrix[row+2][col-2] == "");
    }

    findCaptureRightUpCorner(row, col, color) {
        if ((row < 7) && (col < 7))
            return (this.board.matrix[row+1][col+1] && 
                (this.board.matrix[row+1][col+1].color == color) &&
                this.board.matrix[row+2][col+2] == "");
    }

    findCaptureLeftDownCorner(row, col, color) {
        if ((row > 2) && (col > 2))
            return (this.board.matrix[row-1][col-1] && 
                (this.board.matrix[row-1][col-1].color == color) &&
                this.board.matrix[row-2][col-2] == "");
    }

    findCaptureRightDownCorner(row, col, color) {
        if ((row > 2) && (col < 7))
            return (this.board.matrix[row-1][col+1] && 
                (this.board.matrix[row-1][col+1].color == color) &&
                this.board.matrix[row-2][col+2] == "");
    }

    findCapture(startPiece) {
        let mandatoryMove = false;

        // check if there is any piece of opposite color that must be captured
        for (let row = 1; row <= 8; row++) {
            for (let col = 1; col <= 8; col++) {
                let piece = this.board.matrix[row][col];
                
                if (piece instanceof Queen) {
                    if ((startPiece.color == "white") && (piece.color == "white")) {
                        mandatoryMove = this.findCaptureRightUpCorner(row, col, "black") ||
                            this.findCaptureLeftUpCorner(row, col, "black") ||
                            this.findCaptureRightDownCorner(row, col, "black") ||
                            this.findCaptureLeftDownCorner(row, col, "black");
                    }
                    else if ((startPiece.color == "black") && (piece.color == "black")) {
                        mandatoryMove = this.findCaptureRightUpCorner(row, col, "white") ||
                            this.findCaptureLeftUpCorner(row, col, "white") ||
                            this.findCaptureRightDownCorner(row, col, "white") ||
                            this.findCaptureLeftDownCorner(row, col, "white")
                    }
                }
                else if (piece instanceof Pawn) {
                    if ((startPiece.color == "white") && (piece.color == "white")) {
                        mandatoryMove = this.findCaptureRightUpCorner(row, col, "black") ||
                            this.findCaptureLeftUpCorner(row, col, "black")
                    }
                    else if ((startPiece.color == "black") && (piece.color == "black")) {
                        mandatoryMove = this.findCaptureRightDownCorner(row, col, "white") ||
                            this.findCaptureLeftDownCorner(row, col, "white")
                    }
                }
                if (mandatoryMove) return true;
            }
            if (mandatoryMove) return true;
        }
        return false;
    }

    validMove(startPiece, initialPos, finalPos) {
        const rows = finalPos[0]-initialPos[0];
        const columns = finalPos[1]-initialPos[1];
        let initRow = +initialPos[0], finRow = +finalPos[0],
            initCol = +initialPos[1], finCol = +finalPos[1];
        
        // if there are mandatory captures, check if the current move is one of them
        // extrage in mandatoryMoveMade(startPiece, rows, columns)
        if (this.findCapture(startPiece)) {
            this.captureInProgress = true;
            if (startPiece instanceof Pawn) {
                if (startPiece.color == "white") {
                    return ((this.findCaptureRightUpCorner(initRow, initCol, "black") &&
                        (rows == 2) && (columns == 2)) ||
                        (this.findCaptureLeftUpCorner(initRow, initCol, "black") &&
                        (rows == 2) && (columns == -2)));
                }
                else if (startPiece.color == "black") {
                    return ((this.findCaptureRightDownCorner(initRow, initCol, "white") &&
                        (rows == -2) && (columns == 2)) ||
                        (this.findCaptureLeftDownCorner(initRow, initCol, "white") &&
                        (rows == -2) && (columns == -2)));
                }
            }
            else if (startPiece instanceof Queen) {
                if (startPiece.color == "white") {
                    return ((this.findCaptureRightUpCorner(initRow, initCol, "black") &&
                        (rows == 2) && (columns == 2)) ||
                        (this.findCaptureLeftUpCorner(initRow, initCol, "black") &&
                        (rows == 2) && (columns == -2)) ||
                        (this.findCaptureRightDownCorner(initRow, initCol, "black") &&
                        (rows == -2) && (columns == 2)) ||
                        (this.findCaptureLeftDownCorner(initRow, initCol, "black") &&
                        (rows == -2) && (columns == -2)));
                }
                else if (startPiece.color == "black") {
                    return ((this.findCaptureRightUpCorner(initRow, initCol, "white") &&
                        (rows == 2) && (columns == 2)) ||
                        (this.findCaptureLeftUpCorner(initRow, initCol, "white") &&
                        (rows == 2) && (columns == -2)) ||
                        (this.findCaptureRightDownCorner(initRow, initCol, "white") &&
                        (rows == -2) && (columns == 2)) ||
                        (this.findCaptureLeftDownCorner(initRow, initCol, "white") &&
                        (rows == -2) && (columns == -2)));
                }
            }
        }
        else if (startPiece instanceof Pawn) {
            // check if it's a one step move and if the direction is right
            if ((Math.abs(rows) == 1) && (Math.abs(columns) == 1)) {
                if (startPiece.color == "white") {
                    if ((rows != 1) || (Math.abs(columns) != 1)) return false;
                }
                else if ((rows != -1) || (Math.abs(columns) != 1)) return false;
            }
            // check if it's a 3+ steps move
            else if ((Math.abs(rows) != 1) || (Math.abs(columns) != 1))
                return false;
        }
        else if (startPiece instanceof Queen)
                if ((Math.abs(rows) != 1) || (Math.abs(columns) != 1))
                    return false;
        return true;
    }

    movePiece(piece, initialPos, finalPos) {
        if (piece instanceof Pawn) {
            // create the new piece at the final position
            if (((piece.color == "white") && (finalPos[0] == 8)) ||
                ((piece.color == "black") && (finalPos[0] == 1)))
                this.board.matrix[finalPos[0]][finalPos[1]] = new Queen(piece.color);
            else this.board.matrix[finalPos[0]][finalPos[1]] = new Pawn(piece.color);
        }
        else 
            if (piece instanceof Queen)
                this.board.matrix[finalPos[0]][finalPos[1]] = new Queen(piece.color);
        
        let rows = this.range(initialPos[0], finalPos[0]);
        let columns = this.range(initialPos[1], finalPos[1]);
        if (rows.length > 1)
            for (let i in rows)
                this.board.matrix[rows[i]][columns[i]] = "";
        else this.board.matrix[initialPos[0]][initialPos[1]] = "";
    }

    tryMove(newMove, currentPlayer) {
        let initialPos = newMove.substr(0, 2);
        let finalPos = newMove.substr(2, 2);
        let startPiece = this.board.matrix[initialPos[0]][initialPos[1]];
        let endPiece = this.board.matrix[finalPos[0]][finalPos[1]];
        let captureInProgress = false;

        // check if there's a piece at starting position with the right color
        if (startPiece && !endPiece && startPiece.color.toUpperCase() == currentPlayer) {
            // check if the piece can move at destination
            if (this.validMove(startPiece, initialPos, finalPos)) {
                this.movePiece(startPiece, initialPos, finalPos);
                let newPiece = this.board.matrix[finalPos[0]][finalPos[1]];
                if (this.captureInProgress && this.findCapture(newPiece))
                    return "PARTIAL CAPTURE";
                else {
                    this.captureInProgress = false;
                    return "MOVE DONE";
                }
            }
            else return "INVALID MOVE";
        }
        else return "INVALID MOVE";
    }
}