let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
    score = {
        Wins: 0,
        Loses: 0,
        Ties: 0
    };

}

updateScoreElement();

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win'
        } else if (computerMove === 'Scissors') {
            result = 'Tie'
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'Rock') {
            result = 'You Win';
        } else if (computerMove === 'Paper') {
            result = 'Tie'
        } else if (computerMove === 'Scissors') {
            result = 'You Lose'
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose'
        } else if (computerMove === 'Scissors') {
            result = 'You Win'
        }

    }

    if (result === 'You Win') {
        score.Wins += 1;
    } else if (result === 'You Lose') {
        score.Loses += 1;
    } else if (result === 'Tie') {
        score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = `${result}`;

    document.querySelector('.js-moves')
        .innerHTML = `You 
                    <img src="images/${playerMove}-emoji.png" class="move-icon">
                    <img src="images/${computerMove}-emoji.png" class="move-icon">
                Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Loses}, Ties: ${score.Ties}`;
}
function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}
