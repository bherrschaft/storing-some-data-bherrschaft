
const hands = ['rock', 'paper', 'scissors'];


function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}


const player1 = { name: 'Player 1', getHand: getHand };
const player2 = { name: 'Player 2', getHand: getHand };
const player3 = { name: 'Player 3', getHand: getHand };
const player4 = { name: 'Player 4', getHand: getHand };

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    let winner = null;
    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}. It's a tie!`);
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        winner = player1;
        console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player1.name} wins!`);
    } else {
        winner = player2;
        console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player2.name} wins!`);
    }
    return winner;
}

function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        }
    }

    return player1Wins === playUntil ? player1 : player2;
}

function playTournament(players, playUntil) {
    const winner1 = playGame(players[0], players[1], playUntil);
    const winner2 = playGame(players[2], players[3], playUntil);
    const finalWinner = playGame(winner1, winner2, playUntil);
    
    console.log(`${finalWinner.name} is the world champion`);
    return finalWinner;
}


const tournamentPlayers = [player1, player2, player3, player4];
playTournament(tournamentPlayers, 3);