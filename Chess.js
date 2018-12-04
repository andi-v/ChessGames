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
        else return (new Array(nr1 - nr2 - 1)).fill(undefined).map((_, i) => i + nr2 + 1);
    }

    // checks if the path from initial to final position has no pieces
    // only the Horse can jump over other pieces
    freePath(initialPos, finalPos) {
        let initRow = +initialPos[0], finRow = +finalPos[0],
            initCol = +initialPos[1], finCol = +finalPos[1];
        if (initCol == finCol && Math.abs(finRow - initRow) > 1) {
            for (let row of this.range(initRow, finRow))
                if (this.board.matrix[row][initCol])
                    return false;
        }
        else if (initRow == finRow && Math.abs(finCol - initCol) > 1) {
            for (let col of this.range(initCol, finCol))
                if (this.board.matrix[initRow][col])
                    return false;
        }
        else if (Math.abs(finRow - initRow) == Math.abs(finCol - initCol) &&
                Math.abs(finRow - initRow) > 1) {
            let rows = this.range(initRow, finRow);
            let columns = this.range(initCol, finCol);
            for (let i in rows)
                if (this.board.matrix[rows[i], columns[i]])
                    return false;
        }
        else return true;
    }

    // check if the moving piece can jump that many rows and columns, in that direction
    moveToLocation(piece, rows, columns) {
        switch (piece.toString().toUpperCase()) {
            case "P":   
                if (piece.color == "white") {
                    if ((rows != 1) || (columns != 0)) return false;
                }
                else if ((rows != -1) || (columns != 0)) return false;
                break;
            case "R":   
                return false;
                break;
            case "H":   
                return false;
                break;
            case "B":   
                return false;
                break;
            case "Q":   
                return false;
                break;
            case "K":   
                return false;
                break;
        }
        return true;
    }

    eatAtLocation(piece, rows, columns) {
        switch (piece.toString().toUpperCase()) {
            case "P":   
                if (piece.color == "white") {
                    if ((rows != 1) || (Math.abs(columns) != 1)) return false;
                }
                else if ((rows != -1) || (Math.abs(columns) != 1)) return false;
                break;
            case "R":   
                return false;
                break;
            case "H":   
                return false;
                break;
            case "B":   
                return false;
                break;
            case "Q":   
                return false;
                break;
            case "K":   
                return false;
                break;
        }
        return true;
    }

    movePiece(piece, initialPos, finalPos) {
        switch (piece.toString().toUpperCase()) {
            case "P":   this.board.matrix[finalPos[0]][finalPos[1]] = new Pawn(piece.color);
                        break;
            case "R":   this.board.matrix[finalPos[0]][finalPos[1]] = new Rook(piece.color);
                        break;
            case "H":   this.board.matrix[finalPos[0]][finalPos[1]] = new Horse(piece.color);
                        break;
            case "B":   this.board.matrix[finalPos[0]][finalPos[1]] = new Bishop(piece.color);
                        break;
            case "Q":   this.board.matrix[finalPos[0]][finalPos[1]] = new Queen(piece.color);
                        break;
            case "K":   this.board.matrix[finalPos[0]][finalPos[1]] = new King(piece.color);
                        break;
        }
        this.board.matrix[initialPos[0]][initialPos[1]] = "";
    }

    tryMove(newMove) {
        let initialPos = newMove.substr(0, 2);
        let finalPos = newMove.substr(2, 2);
        let startPiece = this.board.matrix[initialPos[0]][initialPos[1]];
        let endPiece = this.board.matrix[finalPos[0]][finalPos[1]];
        
        // check if there's a piece at starting position
        if (startPiece) {
            // check if the path is clear, except for Horses
            if ((startPiece.toString().toUpperCase() != "H") && this.freePath(initialPos, finalPos))
                // check if the piece can move at destination, and if there's a piece to be captured
                if (!endPiece && this.moveToLocation(startPiece, finalPos[0]-initialPos[0], finalPos[1]-initialPos[1])) {
                    this.movePiece(startPiece, initialPos, finalPos);
                }
                else if (endPiece && this.eatAtLocation(startPiece, finalPos[0]-initialPos[0], finalPos[1]-initialPos[1])) {
                    this.movePiece(startPiece, initialPos, finalPos);
                };
        }
        else return "Invalid move!";
    }
}