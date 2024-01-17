    let score = JSON.parse(localStorage.getItem('score')) || 
        {
            wins: 0,
            loses: 0,
            ties: 0
        };

        updatescoreElement();

        function updatescoreElement() {
            document.querySelector('.js-score')
                .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
        }

        function pickMove(userMove) {
            const computerMove = pickComputerMove();
            let result = '';

            if (userMove === computerMove) {
                result = 'Tie';
            } else if (
                (userMove === 'rock' && computerMove === 'scissors') ||
                (userMove === 'paper' && computerMove === 'rock') ||
                (userMove === 'scissors' && computerMove === 'paper')
            ) {
                result = 'You win.';
            } else {
                result = 'You lose.';
            }

            if (result === 'You win.') {
                score.wins += 1;
            } else if (result === 'You lose.') {
                score.loses += 1;
            } else if (result === 'Tie') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            document.querySelector('.js-result')
                .innerHTML = result;

            document.querySelector('.js-moves')
                .innerHTML = `you 
        <img src="${userMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon"> 
        computer`;

            updatescoreElement();
        }

        function pickComputerMove() {
            const computerChoice = Math.random();

            if (computerChoice >= 0 && computerChoice < 1 / 3) {
                return 'rock';
            } else if (computerChoice >= 1 / 3 && computerChoice < 2 / 3) {
                return 'paper';
            } else {
                return 'scissors';
            }
        }