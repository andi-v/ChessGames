class Board {
    constructor(game, width, height) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.matrix = [{}];
    }

    createInitialMatrix() {
        var m = this.matrix;
        if (this.game == "chess") {
            m.push({A: new Rook("white")});
            //m[1]["A"] = new Rook("white");
            m[1]["H"] = new Rook("white");
            m[1]["B"] = new Horse("white");
            m[1]["G"] = new Horse("white");
            m[1]["C"] = new Bishop("white");
            m[1]["F"] = new Bishop("white");
            m[1]["D"] = new Queen("white");
            m[1]["E"] = new King("white");

            m.push({A: new Pawn("white")});
            // m[2]["A"] = new Pawn("white");
            m[2]["B"] = new Pawn("white");
            m[2]["C"] = new Pawn("white");
            m[2]["D"] = new Pawn("white");
            m[2]["E"] = new Pawn("white");
            m[2]["F"] = new Pawn("white");
            m[2]["G"] = new Pawn("white");
            m[2]["H"] = new Pawn("white");
    
            for (let i=1; i <= 4; i++)
                m.push({});
            m.push({A: new Pawn("black")});
            //m[7]["A"] = new Pawn("black");
            m[7]["B"] = new Pawn("black");
            m[7]["C"] = new Pawn("black");
            m[7]["D"] = new Pawn("black");
            m[7]["E"] = new Pawn("black");
            m[7]["F"] = new Pawn("black");
            m[7]["G"] = new Pawn("black");
            m[7]["H"] = new Pawn("black");

            m.push({A: new Rook("black")});
            //m[8]["A"] = new Rook("black");
            m[8]["H"] = new Rook("black");
            m[8]["B"] = new Horse("black");
            m[8]["G"] = new Horse("black");
            m[8]["C"] = new Bishop("black");
            m[8]["F"] = new Bishop("black");
            m[8]["D"] = new Queen("black");
            m[8]["E"] = new King("black");
        }
    }
}