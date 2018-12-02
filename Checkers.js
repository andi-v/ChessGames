class Checkers extends Game {
    constructor() {
        super();
        this.board = new Board(8, 8);
        this.createInitialMatrix();
    }
    
    createInitialMatrix() {
        let m = this.board.matrix;
        m[1]["A"] = new Pawn("white");
        m[1]["C"] = new Pawn("white");
        m[1]["E"] = new Pawn("white");
        m[1]["G"] = new Pawn("white");
        m[2]["B"] = new Pawn("white");
        m[2]["D"] = new Pawn("white");
        m[2]["F"] = new Pawn("white");
        m[2]["H"] = new Pawn("white");
        m[3]["A"] = new Pawn("white");
        m[3]["C"] = new Pawn("white");
        m[3]["E"] = new Pawn("white");
        m[3]["G"] = new Pawn("white");

        m[6]["B"] = new Pawn("black");
        m[6]["D"] = new Pawn("black");
        m[6]["F"] = new Pawn("black");
        m[6]["H"] = new Pawn("black");
        m[7]["A"] = new Pawn("black");
        m[7]["C"] = new Pawn("black");
        m[7]["E"] = new Pawn("black");
        m[7]["G"] = new Pawn("black");
        m[8]["B"] = new Pawn("black");
        m[8]["D"] = new Pawn("black");
        m[8]["F"] = new Pawn("black");
        m[8]["H"] = new Pawn("black");
    }

    movePiece(initialPosition, finalPosition) {

    }
}