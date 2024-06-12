
const hands = ['rock', 'paper', 'scissors'];


function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}


const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};


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


playRound(player1, player2);