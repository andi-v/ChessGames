class Chess extends Game {
    constructor() {
        super();
        this.board = new Board(8, 8);
        this.createInitialMatrix();
    }
    
    createInitialMatrix() {
        let m = this.board.matrix;
        m[1][1] = new Rook("white");
        m[1][8] = new Rook("white");
        m[1][2] = new Horse("white");
        m[1][7] = new Horse("white");
        m[1][3] = new Bishop("white");
        m[1][6] = new Bishop("white");
        m[1][4] = new Queen("white");
        m[1][5] = new King("white");

        m[2][1] = new Pawn("white");
        m[2][2] = new Pawn("white");
        m[2][3] = new Pawn("white");
        m[2][4] = new Pawn("white");
        m[2][5] = new Pawn("white");
        m[2][6] = new Pawn("white");
        m[2][7] = new Pawn("white");
        m[2][8] = new Pawn("white");

        m[7][1] = new Pawn("black");
        m[7][2] = new Pawn("black");
        m[7][3] = new Pawn("black");
        m[7][4] = new Pawn("black");
        m[7][5] = new Pawn("black");
        m[7][6] = new Pawn("black");
        m[7][7] = new Pawn("black");
        m[7][8] = new Pawn("black");

        m[8][1] = new Rook("black");
        m[8][8] = new Rook("black");
        m[8][2] = new Horse("black");
        m[8][7] = new Horse("black");
        m[8][3] = new Bishop("black");
        m[8][6] = new Bishop("black");
        m[8][4] = new Queen("black");
        m[8][5] = new King("black");
    }

    // creates a range from [nr1 + 1, nr2 - 1]
    range(nr1, nr2) {
        if (nr1 < nr2)
            return (new Array(nr2 - nr1 - 1)).fill(undefined).map((_, i) => i + nr1 + 1);
        else return (new Array(nr1 - nr2 - 1)).fill(undefined).map((_, i) => nr1 - i - 1);
    }

    getPiece(row, col) {
        return this.board.matrix[row][col];
    }

    setPiece(row, col, piece) {
        this.board.matrix[row][col] = piece;
    }

    // checks if the path from initial to final position has no pieces
    // only the Horse can jump over other pieces
    freePath(initialPos, finalPos) {
        let initRow = +initialPos[0], finRow = +finalPos[0],
            initCol = +initialPos[1], finCol = +finalPos[1];
        if (initCol == finCol && Math.abs(finRow - initRow) > 1) {
            for (let row of this.range(initRow, finRow))
                if (this.getPiece(row, initCol))
                    return false;
        }
        else if (initRow == finRow && Math.abs(finCol - initCol) > 1) {
            for (let col of this.range(initCol, finCol))
                if (this.getPiece(initRow, col))
                    return false;
        }
        else if (Math.abs(finRow - initRow) == Math.abs(finCol - initCol) &&
                Math.abs(finRow - initRow) > 1) {
            let rows = this.range(initRow, finRow);
            let columns = this.range(initCol, finCol);
            for (let i in rows)
                if (this.getPiece(rows[i], columns[i]))
                    return false;
        }
        return true;
    }

    // check if the moving piece can jump that many rows and columns, in that direction
    validMove(startPiece, endPiece, rows, columns) {
        if (startPiece instanceof Pawn) {
            if (!endPiece) {
                // The Pawn rules for moving to an empty location
                if (startPiece.color == "white") {
                    if ((rows != 1) || (columns != 0)) return false;
                }
                else if ((rows != -1) || (columns != 0)) return false;
            }
            else {
                // The Pawn rules for capturing another piece
                if (startPiece.color == "white") {
                    if ((rows != 1) || (Math.abs(columns) != 1)) return false;
                }
                else if ((rows != -1) || (Math.abs(columns) != 1)) return false;
            }
        }
        if (startPiece instanceof Rook)
            if (rows * columns != 0) return false;
        if (startPiece instanceof Horse)
            if ((rows * columns != 2) && (rows * columns != -2))
                return false;
        if (startPiece instanceof Bishop)
            if (Math.abs(rows) != Math.abs(columns))
                return false;
        if (startPiece instanceof Queen)
            if ((rows * columns != 0) && (Math.abs(rows) != Math.abs(columns)))
                return false;
        if (startPiece instanceof King)
            if ((Math.abs(rows) > 1) || (Math.abs(columns) > 1))
                return false;
        
        // Two pieces of the same color cannot capture each other
        if (endPiece && (startPiece.color == endPiece.color))
            return false;
        return true;
    }

    movePiece(piece, initialPos, finalPos) {
        if (piece instanceof Pawn) {
            if (((piece.color == "white") && (finalPos[0] == 8)) ||
                ((piece.color == "black") && (finalPos[0] == 1)))
                this.setPiece(finalPos[0], finalPos[1], new Queen(piece.color));
            else this.setPiece(finalPos[0], finalPos[1], new Pawn(piece.color));
        }
        if (piece instanceof Rook)
            this.setPiece(finalPos[0], finalPos[1], new Rook(piece.color));
        if (piece instanceof Horse)
            this.setPiece(finalPos[0], finalPos[1], new Horse(piece.color));
        if (piece instanceof Bishop)
            this.setPiece(finalPos[0], finalPos[1], new Bishop(piece.color));
        if (piece instanceof Queen)
            this.setPiece(finalPos[0], finalPos[1], new Queen(piece.color));
        if (piece instanceof King)
            this.setPiece(finalPos[0], finalPos[1], new King(piece.color));
        
        this.setPiece(initialPos[0], initialPos[1], "");
    }

    tryMove(newMove, currentPlayer) {
        let initialPos = newMove.substr(0, 2);
        let finalPos = newMove.substr(2, 2);
        let startPiece = this.getPiece(initialPos[0], initialPos[1]);
        let endPiece = this.getPiece(finalPos[0], finalPos[1]);
        
        // check if there's a piece at starting position with the right color
        if (startPiece && startPiece.color.toUpperCase() == currentPlayer) {
            // check if the piece can move at destination
            if (this.validMove(startPiece, endPiece, finalPos[0]-initialPos[0], finalPos[1]-initialPos[1])) {
                // check if the path is clear, except for Horses
                if ((!(startPiece instanceof Horse) && this.freePath(initialPos, finalPos))
                || (startPiece instanceof Horse)) {
                    this.movePiece(startPiece, initialPos, finalPos);
                    return "MOVE DONE";
                }
            }
            else return "INVALID MOVE";
        }
        else return "INVALID MOVE";
    }
}