var ChessTrainer = ChessTrainer || {};

ChessTrainer.config = {
    //draggable: true,
    side: 'white', // Default side
    highlight: {
        // Add any highlight configuration options
        square: {
            lastMove: true,
            check: true,
        },
    },
    // Add any other configuration options you may need
};

ChessTrainer.board = {
    instance: null,

    create: function () {
        var boardConfig = {
            draggable: ChessTrainer.config.draggable,
            orientation: ChessTrainer.config.side,
            position: 'start',
            onDragStart: ChessTrainer.onDragStart,
            onDrop: ChessTrainer.onDrop,
            onSnapEnd: ChessTrainer.onSnapEnd
        };

        this.instance = Chessboard('myBoard', boardConfig);
        $(window).resize(this.resize);
    }
};

ChessTrainer.enablePieceMovability = function () {
    ChessTrainer.config.draggable = true;
    ChessTrainer.board.instance.destroy();
    ChessTrainer.board.create();
    ChessTrainer.status.update();
    ChessTrainer.evaluation.updateEvaluationBar(0);
};


ChessTrainer.disablePieceMovability = function () {
    ChessTrainer.config.draggable = false;
    ChessTrainer.board.create();
};

// Rest of the code...

$(document).ready(function () {
    ChessTrainer.board.create();
});
