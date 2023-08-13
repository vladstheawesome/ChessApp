var ChessTrainer = ChessTrainer || {};

ChessTrainer.main = {
    init: function () {
        // Add event listeners to the color options
        $('.colorOption').on('click', function () {
            var side = $(this).hasClass('white-button') ? 'white' : 'black';
            ChessTrainer.status.selectSide = ChessTrainer.status.selectSide.bind(ChessTrainer.status);
        });
    }
};

$(document).ready(function () {
    ChessTrainer.main.init();
});
