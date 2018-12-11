class Piece {
    constructor(color) {
        this.color = color;
    }

    set color(value) {
        this._color = value;
    }

    get color() {
        return this._color;
    }

    toString(game, representation) {
        const chessSymbols = {k: "♔", K: "♚",
                            q: "♕", Q: "♛",
                            r: "♖", R: "♜",
                            b: "♗", B: "♝",
                            h: "♘", H: "♞",
                            p: "♙", P: "♟"},
            checkersSymbols = {p: "○", P: "●", q: "♕", Q: "♛"};

        if (representation == "letters") {
            if (this.color == "black")
                return this.constructor.name.substr(0, 1);
            else return this.constructor.name.substr(0, 1).toLowerCase();
        }
        else {
            if (game == "Chess") {
                if (this.color == "black")
                    return chessSymbols[this.constructor.name.substr(0, 1)];
                else return chessSymbols[this.constructor.name.substr(0, 1).toLowerCase()];
            }
            else {
                if (this.color == "black")
                    return checkersSymbols[this.constructor.name.substr(0, 1)];
                else return checkersSymbols[this.constructor.name.substr(0, 1).toLowerCase()];
            }
        }
    }
}

class Pawn extends Piece {}
class Rook extends Piece {}
class Horse extends Piece {}
class Bishop extends Piece {}
class Queen extends Piece {}
class King extends Piece {}