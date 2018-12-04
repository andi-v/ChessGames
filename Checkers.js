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

    movePiece(initialPosition, finalPosition) {

    }
}