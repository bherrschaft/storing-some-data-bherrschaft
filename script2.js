const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[Math.floor(Math.random() * hands.length)];
}

let player = { name: '', score: 0 };
let computer1 = { name: 'Computer 1', score: 0 };
let computer2 = { name: 'Computer 2', score: 0 };
let computer3 = { name: 'Computer 3', score: 0 };

let playUntil = 3;
let semiFinalWinners = [];

function startTournament() {
    player.name = document.getElementById('playerName').value || 'Player';
    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.game-section').style.display = 'block';
    updateScoreboard();
    playUserSemiFinal();
}

function updateScoreboard() {
    let scoreboardHTML = `
        <h4>${player.name}: <span id="playerScore">${player.score}</span></h4>
        <h4>Computer 1: <span id="computer1Score">${computer1.score}</span></h4>
        <h4>Computer 2: <span id="computer2Score">${computer2.score}</span></h4>
        <h4>Computer 3: <span id="computer3Score">${computer3.score}</span></h4>
    `;
    document.getElementById('scoreboard').innerHTML = scoreboardHTML;
}

function playUserSemiFinal() {
    document.querySelector('.choices').style.display = 'block';
    document.getElementById('overallResult').innerText = `${player.name} vs. Computer 1`;
}

function playUserRound(playerHand) {
    const computerHand = getHand();
    let result = '';

    if (playerHand === computerHand) {
        result = "It's a tie!";
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper')
    ) {
        result = `${player.name} wins this round!`;
        player.score++;
    } else {
        result = `Computer 1 wins this round!`;
        computer1.score++;
    }

    document.getElementById('roundResult').innerText = `${player.name} played ${playerHand}, Computer 1 played ${computerHand}. ${result}`;
    updateScores();

    if (player.score === playUntil || computer1.score === playUntil) {
        let winner = player.score === playUntil ? player : computer1;
        semiFinalWinners.push(winner);
        setTimeout(() => {
            document.getElementById('roundResult').innerText = '';
            document.getElementById('overallResult').innerText = '';
            resetScores();
            playComputerSemiFinal();
        }, 3000);
    }
}

function playComputerSemiFinal() {
    document.querySelector('.choices').style.display = 'none';
    document.getElementById('overallResult').innerText = 'Computer 2 vs. Computer 3';

    let interval = setInterval(() => {
        const hand1 = getHand();
        const hand2 = getHand();
        let result = '';

        if (hand1 === hand2) {
            result = "It's a tie!";
        } else if (
            (hand1 === 'rock' && hand2 === 'scissors') ||
            (hand1 === 'paper' && hand2 === 'rock') ||
            (hand1 === 'scissors' && hand2 === 'paper')
        ) {
            computer2.score++;
            result = `Computer 2 wins this round!`;
        } else {
            computer3.score++;
            result = `Computer 3 wins this round!`;
        }

        document.getElementById('roundResult').innerText = `Computer 2 played ${hand1}, Computer 3 played ${hand2}. ${result}`;
        updateScores();

        if (computer2.score === playUntil || computer3.score === playUntil) {
            clearInterval(interval);
            let winner = computer2.score === playUntil ? computer2 : computer3;
            semiFinalWinners.push(winner);
            setTimeout(() => {
                document.getElementById('roundResult').innerText = '';
                document.getElementById('overallResult').innerText = '';
                resetScores();
                playFinalRound();
            }, 3000);
        }
    }, 1000);
}

function playFinalRound() {
    let finalGame = { player1: semiFinalWinners[0], player2: semiFinalWinners[1] };
    document.getElementById('overallResult').innerText = `${finalGame.player1.name} vs. ${finalGame.player2.name}`;

    if (finalGame.player1 === player ) {
        document.querySelector('.choices').style.display = 'block';
        document.getElementById('roundResult').innerText = 'Play your final round!';
        document.getElementById('rock').setAttribute( "onClick", "javascript: playUserFinalRound('rock');" );
        document.getElementById('paper').setAttribute( "onClick", "javascript: playUserFinalRound('paper');" );
        document.getElementById('scissors').setAttribute( "onClick", "javascript: playUserFinalRound('scissors');" );
    } else {
        document.querySelector('.choices').style.display = 'none';
        playComputerFinal(finalGame.player1, finalGame.player2);
    }
}

function playUserFinalRound(playerHand) {
    const finalGame = { player1: semiFinalWinners[0], player2: semiFinalWinners[1] };
    let computer = finalGame.player2 ;
    const computerHand = getHand();
    let result = '';

    if (playerHand === computerHand) {
        result = "It's a tie!";
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper')
    ) {
        result = `${player.name} wins this round!`;
        player.score++;
    } else {
        result = `${computer.name} wins this round!`;
        computer.score++;
    }

    document.getElementById('roundResult').innerText = `${player.name} played ${playerHand}, ${computer.name} played ${computerHand}. ${result}`;
    updateScores();

    if (player.score === playUntil || computer.score === playUntil) {
        let winner = player.score === playUntil ? player : computer;
        declareChampion(winner);
    }
}


function playComputerFinal(computer1, computer2) {
    let interval = setInterval(() => {
        const hand1 = getHand();
        const hand2 = getHand();
        let result = '';

        if (hand1 === hand2) {
            result = "It's a tie!";
        } else if (
            (hand1 === 'rock' && hand2 === 'scissors') ||
            (hand1 === 'paper' && hand2 === 'rock') ||
            (hand1 === 'scissors' && hand2 === 'paper')
        ) {
            computer1.score++;
            result = `${computer1.name} wins this round!`;
        } else {
            computer2.score++;
            result = `${computer2.name} wins this round!`;
        }

        document.getElementById('roundResult').innerText = `${computer1.name} played ${hand1}, ${computer2.name} played ${hand2}. ${result}`;
        updateScores();

        if (computer1.score === playUntil || computer2.score === playUntil) {
            clearInterval(interval);
            let winner = computer1.score === playUntil ? computer1 : computer2;
            declareChampion(winner);
        }
    }, 1000);
}

function declareChampion(champion) {
    document.getElementById('overallResult').innerText = `${champion.name} is the world champion!`;
    document.querySelector('.choices').style.display = 'none';  // Hide choices once the champion is declared
}

function resetScores() {
    player.score = 0;
    computer1.score = 0;
    computer2.score = 0;
    computer3.score = 0;
    updateScores();
}

function updateScores() {
    document.getElementById('playerScore').innerText = player.score;
    document.getElementById('computer1Score').innerText = computer1.score;
    document.getElementById('computer2Score').innerText = computer2.score;
    document.getElementById('computer3Score').innerText = computer3.score;
}

function resetGame() {
    resetScores();
    semiFinalWinners = [];
    document.querySelector('.input-section').style.display = 'block';
    document.querySelector('.game-section').style.display = 'none';
    document.querySelector('.choices').style.display = 'block';
    document.getElementById('playerName').value = '';
    document.getElementById('rock').setAttribute( "onClick", "javascript: playUserRound('rock');" );
    document.getElementById('paper').setAttribute( "onClick", "javascript: playUserRound('paper');" );
    document.getElementById('scissors').setAttribute( "onClick", "javascript: playUserRound('scissors');" );
}
