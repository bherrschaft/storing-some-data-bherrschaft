
// An array that holds the possible hands: rock, paper, and scissors.
const hands = ['rock', 'paper', 'scissors'];

// Function to randomly select one of the hands.
function getHand() {
    // Math.random() generates a random number between 0 and 1.
    // Multiplying by 10 scales it up to a number between 0 and 10.
    // parseInt() removes the decimal part, leaving an integer.
    // Using % 3 (modulus) ensures the result is 0, 1, or 2.
    // hands[] then selects 'rock', 'paper', or 'scissors' based on this number.
    return hands[parseInt(Math.random() * 10) % 3];
}

// Creating player objects with a name and a reference to the getHand function.
const player1 = { name: 'Player 1', getHand: getHand };
const player2 = { name: 'Player 2', getHand: getHand };
const player3 = { name: 'Player 3', getHand: getHand };
const player4 = { name: 'Player 4', getHand: getHand };

// Function to play one round between two players.
function playRound(player1, player2) {
    // Each player selects a hand.
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // Variable to store the winner of the round.
    let winner = null;

    // If both players choose the same hand, it's a tie.
    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}. It's a tie!`);
    } else if (
        // Checking all winning conditions for player 1.
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        winner = player1; // Player 1 wins.
        console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player1.name} wins!`);
    } else {
        winner = player2; // Player 2 wins.
        console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player2.name} wins!`);
    }
    return winner; // Return the winner of the round.
}

// Function to play a game until one player reaches a certain number of wins.
function playGame(player1, player2, playUntil) {
    // Variables to keep track of each player's wins.
    let player1Wins = 0;
    let player2Wins = 0;

    // Keep playing rounds until one player reaches the playUntil number of wins.
    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2); // Play a round and get the winner.
        if (winner === player1) {
            player1Wins++; // Increment player 1's win count.
        } else if (winner === player2) {
            player2Wins++; // Increment player 2's win count.
        }
    }

    // Return the player who reached the playUntil number of wins first.
    return player1Wins === playUntil ? player1 : player2;
}

// Function to play a tournament with multiple players.
function playTournament(players, playUntil) {
    // Play games between the first two players and the second two players.
    const winner1 = playGame(players[0], players[1], playUntil);
    const winner2 = playGame(players[2], players[3], playUntil);
    // The winners of the previous games play against each other.
    const finalWinner = playGame(winner1, winner2, playUntil);
    
    // Announce the tournament champion.
    console.log(`${finalWinner.name} is the world champion`);
    return finalWinner; // Return the final winner of the tournament.
}

// Array of all players in the tournament.
const tournamentPlayers = [player1, player2, player3, player4];
// Start the tournament, playing until one player wins 3 rounds in each game.
playTournament(tournamentPlayers, 3);
playTournament(tournamentPlayers, 3);
