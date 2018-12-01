class Chess extends Game {
    constructor() {
        super();
        this.board = new Board("chess", 8, 8);
        this.board.createInitialMatrix();
    }
    
    movePiece(initialPosition, finalPosition) {

    }
}