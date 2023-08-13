var ChessTrainer = ChessTrainer || {};

// Create a new chess game instance
ChessTrainer.game = new Chess();

ChessTrainer.status = {
    $status: null,
    $fen: null,
    $pgn: null,

    $colorSelection: null,
    $gameNotation: null,

    init: function () {
        this.$status = $('#status');
        this.$fen = $('#fen');
        this.$pgn = $('#pgn');

        this.$colorSelection = $('#colorSelection');
        this.$gameNotation = $('#gameNotation');
    },

    update: function () {
        var status = '';

        var moveColor = 'White';
        if (ChessTrainer.game.turn() === 'b') {
            moveColor = 'Black';
        }

        // Checkmate?
        if (ChessTrainer.game.in_checkmate()) {
            status = 'Game over, ' + moveColor + ' is in checkmate.';
        }
        // Draw?
        else if (ChessTrainer.game.in_draw()) {
            status = 'Game over, drawn position';
        }
        // Game still on
        else {
            status = moveColor + ' to move';

            // Check?
            if (ChessTrainer.game.in_check()) {
                status += ', ' + moveColor + ' is in check';
            }
        }

        this.$status.html(status);
        this.$fen.html(ChessTrainer.game.fen());
        this.$pgn.html(ChessTrainer.game.pgn());
    },

    selectSide: function (side) {
        ChessTrainer.config.side = side;
        ChessTrainer.board.create();
        ChessTrainer.enablePieceMovability();
        this.update();
        ChessTrainer.evaluation.updateEvaluationBar(0);

        this.$colorSelection.hide();
        this.$gameNotation.show();
    },
};

$(document).ready(function () {
    ChessTrainer.status.init();
});
