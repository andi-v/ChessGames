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

    toString() {
        if (this.color == "black")
            return this.constructor.name.substr(0, 1);
        else return this.constructor.name.substr(0, 1).toLowerCase();
    }
}

class Pawn extends Piece {}
class Rook extends Piece {}
class Horse extends Piece {}
class Bishop extends Piece {}
class Queen extends Piece {}
class King extends Piece {}