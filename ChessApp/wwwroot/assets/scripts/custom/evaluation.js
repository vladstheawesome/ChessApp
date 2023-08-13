var ChessTrainer = ChessTrainer || {};

ChessTrainer.evaluation = {
    updateEvaluationBar: function (value) {
        var isBlack = ChessTrainer.config.side === 'black';

        var evaluationBar = document.querySelector('.evaluation-bar');
        var innerElement = document.querySelector('.evaluation-bar__inner');
        var fillElement = document.querySelector('.evaluation-bar__fill');

        if (!evaluationBar || !innerElement || !fillElement) {
            // One or more elements are missing, handle the error
            console.error('One or more evaluation bar elements are missing.');
            return;
        }

        if (isBlack) {
            evaluationBar.classList.remove('white-selected');
            evaluationBar.classList.add('black-selected');
            innerElement.style.transform = 'rotate(-180deg)';
            fillElement.style.top = '0';
            fillElement.style.bottom = 'auto';
        } else {
            evaluationBar.classList.remove('black-selected');
            evaluationBar.classList.add('white-selected');
            innerElement.style.transform = 'rotate(0)';
            fillElement.style.top = 'auto';
            fillElement.style.bottom = '0';
        }

        var barWidth = evaluationBar.offsetWidth;
        var fillWidth = Math.abs(value) * (barWidth / 2);
        //var fillColor = value >= 0 ? 'green' : 'red';

        fillWidth = Math.max(fillWidth, 1); // Minimum width of 1 pixel
        fillWidth = Math.min(fillWidth, barWidth / 2); // Maximum width of half the bar width

        if (isBlack) {
            fillWidth = barWidth / 2 - fillWidth;
        }

        //fillElement.style.width = fillWidth + 'px';
        //fillElement.style.backgroundColor = fillColor;
    }
};
