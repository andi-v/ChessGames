class Checkers extends Game {
    constructor() {
        super();
        this.board = new Board(8, 8);
        this.createInitialMatrix();
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
        return (this.board.matrix[row+1][col-1] && 
                (this.board.matrix[row+1][col-1].color == color) &&
                this.board.matrix[row+2][col-2] == "");
    }

    findCaptureRightUpCorner(row, col, color) {
        return (this.board.matrix[row+1][col+1] && 
                (this.board.matrix[row+1][col+1].color == color) &&
                this.board.matrix[row+2][col+2] == "");
    }

    findCaptureLeftDownCorner(row, col, color) {
        return (this.board.matrix[row-1][col-1] && 
                (this.board.matrix[row-1][col-1].color == color) &&
                this.board.matrix[row-2][col-2] == "");
    }

    findCaptureRightDownCorner(row, col, color) {
        return (this.board.matrix[row-1][col+1] && 
                (this.board.matrix[row-1][col+1].color == color) &&
                this.board.matrix[row-2][col+2] == "");
    }


    validMove(startPiece, initialPos, finalPos) {
        const rows = finalPos[0]-initialPos[0];
        const columns = finalPos[1]-initialPos[1];
        let initRow = +initialPos[0], finRow = +finalPos[0],
            initCol = +initialPos[1], finCol = +finalPos[1];
        let mandatoryMove = false;

        // check if there is any piece of opposite color that must be captured
        // extrage in alta fctie(startPiece)
        for (let row = 1; row <= 8; row++) {
            for (let col = 1; col <= 8; col++) {
                let piece = this.board.matrix[row][col];
                
                // if it.s a white Pawn / Queen, check the 2 corners above
                if (((piece instanceof Pawn) || (piece instanceof Queen)) &&
                (startPiece.color == "white") && (piece.color == "white")) {
                    if (findCaptureRightUpCorner(row, col, "black") ||
                        findCaptureLeftUpCorner(row, col, "black")) {
                            mandatoryMove = true;
                            break;
                        }
                }
                // if it.s a black Pawn / Queen, check the 2 corners below
                if (((piece instanceof Pawn) || (piece instanceof Queen)) &&
                (startPiece.color == "black") && (piece.color == "black")) {
                    if (findCaptureRightDownCorner(row, col, "white") ||
                        findCaptureLeftDownCorner(row, col, "white")) {
                            mandatoryMove = true;
                            break;
                        }
                }
                // if it.s a white Queen, also check the 2 corners below
                if ((piece instanceof Queen) &&
                (startPiece.color == "white") && (piece.color == "white")) {
                    if (findCaptureRightDownCorner(row, col, "black") ||
                        findCaptureLeftDownCorner(row, col, "black")) {
                            mandatoryMove = true;
                            break;
                        }
                }
                // if it.s a black Queen, also check the 2 corners above
                if ((piece instanceof Queen) &&
                (startPiece.color == "black") && (piece.color == "black")) {
                    if (findCaptureRightUpCorner(row, col, "black") ||
                        findCaptureLeftUpCorner(row, col, "black")) {
                            mandatoryMove = true;
                            break;
                        }
                }
            }
            if (mandatoryMove) break;
        }

        // if there are mandatory captures, check if the current move is one of them
        let mandatoryMoveMade = false;
        if (mandatoryMove) {
            if ((startPiece.toString().toUpperCase() == "P") && (startPiece.color == "white")
            || (startPiece.toString().toUpperCase() == "Q")) {
                if ((this.board.matrix[initRow+1][initCol+1] && 
                    (this.board.matrix[initRow+1][initCol+1].color == "black") &&
                    (this.board.matrix[initRow+2][initCol+2] == "") &&
                    ((rows == 2) && (columns == 2))) ||
                    (this.board.matrix[initRow+1][initCol-1] && 
                    (this.board.matrix[initRow+1][initCol-1].color == "black") &&
                    (this.board.matrix[initRow+2][initCol-2] == "")) &&
                    ((rows == 2) || (columns == -2))) {
                        mandatoryMoveMade = true;
                    }
            }
            if ((startPiece.toString().toUpperCase() == "P") && (startPiece.color == "black")
            || (startPiece.toString().toUpperCase() == "Q")) {
                if ((this.board.matrix[initRow-1][initCol+1] && 
                    (this.board.matrix[initRow-1][initCol+1].color == "white") &&
                    (this.board.matrix[initRow-2][initCol+2] == "") &&
                    ((rows == -2) || (columns == 2))) ||
                    (this.board.matrix[initRow-1][initCol-1] && 
                    (this.board.matrix[initRow-1][initCol-1].color == "white") &&
                    (this.board.matrix[initRow-2][initCol-2] == "") &&
                    ((rows == -2) || (columns == -2)))) {
                        mandatoryMoveMade = true;
                    }
            }
            if (!mandatoryMoveMade) return false;
        }
        else 
            switch (startPiece.toString().toUpperCase()) {
                case "P":
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
                    break;
                case "Q":
                    if ((Math.abs(rows) != 1) || (Math.abs(columns) != 1))
                        return false;
                    break;
            }
        return true;
    }

    movePiece(piece, initialPos, finalPos) {
        switch (piece.toString().toUpperCase()) {
            case "P": {
                // create the new piece at the final position
                if (((piece.color == "white") && (finalPos[0] == 8)) ||
                    ((piece.color == "black") && (finalPos[0] == 1)))
                    this.board.matrix[finalPos[0]][finalPos[1]] = new Queen(piece.color);
                else this.board.matrix[finalPos[0]][finalPos[1]] = new Pawn(piece.color);
                break;
            }
            case "Q":   
                this.board.matrix[finalPos[0]][finalPos[1]] = new Queen(piece.color);
                break;
        }
        let rows = this.range(initialPos[0], finalPos[0]);
        let columns = this.range(initialPos[1], finalPos[1]);
        if (rows.length > 1)
            for (let i in rows)
                this.board.matrix[rows[i]][columns[i]] = "";
        else this.board.matrix[initialPos[0]][initialPos[1]] = "";
    }

    tryMove(newMove) {
        let initialPos = newMove.substr(0, 2);
        let finalPos = newMove.substr(2, 2);
        let startPiece = this.board.matrix[initialPos[0]][initialPos[1]];
        let endPiece = this.board.matrix[finalPos[0]][finalPos[1]];

        // check if there's a piece at starting position
        if (startPiece && !endPiece) {
            // check if the piece can move at destination
            if (this.validMove(startPiece, initialPos, finalPos)) {
                this.movePiece(startPiece, initialPos, finalPos);
                return "MOVE DONE";
            }
            else return "INVALID MOVE";
        }
    }
}