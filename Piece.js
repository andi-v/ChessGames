class Piece {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set color(value) {
        this._color = value;
    }

    get color() {
        return this._color;
    }

    firstLetter() {
        return this.name.substr(1, 1);
    }
}