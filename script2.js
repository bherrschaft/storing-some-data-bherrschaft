// Define the possible hands: rock, paper, and scissors
const hands = ['rock', 'paper', 'scissors'];

// Function to randomly select a hand from the hands array
function getHand() {
    return hands[Math.floor(Math.random() * hands.length)];
}

// Create player and computer objects with name and score properties
let player = { name: '', score: 0 };
let computer1 = { name: 'Computer 1', score: 0 };
let computer2 = { name: 'Computer 2', score: 0 };
let computer3 = { name: 'Computer 3', score: 0 };

// Set the number of wins needed to win the game and an array to store semifinal winners
let playUntil = 3;
let semiFinalWinners = [];

// Function to start the tournament
function startTournament() {
    // Get the player's name from the input field or default to 'Player'
    player.name = document.getElementById('playerName').value || 'Player';
    // Hide the input section and show the game section
    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.game-section').style.display = 'block';
    // Update the scoreboard
    updateScoreboard();
    // Start the user's semifinal round
    playUserSemiFinal();
}

// Function to update the scoreboard with current scores
function updateScoreboard() {
    // Create HTML for the scoreboard with the current scores
    let scoreboardHTML = `
        <h4>${player.name}: <span id="playerScore">${player.score}</span></h4>
        <h4>Computer 1: <span id="computer1Score">${computer1.score}</span></h4>
        <h4>Computer 2: <span id="computer2Score">${computer2.score}</span></h4>
        <h4>Computer 3: <span id="computer3Score">${computer3.score}</span></h4>
    `;
    // Set the inner HTML of the scoreboard element to the created HTML
    document.getElementById('scoreboard').innerHTML = scoreboardHTML;
}

// Function to start the user's semifinal round against Computer 1
function playUserSemiFinal() {
    // Show the choices buttons
    document.querySelector('.choices').style.display = 'block';
    // Display the matchup
    document.getElementById('overallResult').innerText = `${player.name} vs. Computer 1`;
}

// Function to play a round between the user and Computer 1
function playUserRound(playerHand) {
    // Get the computer's hand
    const computerHand = getHand();
    // Initialize the result of the round as an empty string
    let result = '';

    // Determine the result of the round
    if (playerHand === computerHand) {
        result = "It's a tie!";
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper')
    ) {
        // If the player wins, increment the player's score
        result = `${player.name} wins this round!`;
        player.score++;
    } else {
        // If the computer wins, increment the computer's score
        result = `Computer 1 wins this round!`;
        computer1.score++;
    }

    // Display the result of the round
    document.getElementById('roundResult').innerText = `${player.name} played ${playerHand}, Computer 1 played ${computerHand}. ${result}`;
    // Update the scoreboard
    updateScores();

    // Check if either player has won enough rounds to win the match
    if (player.score === playUntil || computer1.score === playUntil) {
        // Determine the winner
        let winner = player.score === playUntil ? player : computer1;
        // Add the winner to the semifinal winners array
        semiFinalWinners.push(winner);
        // After a short delay, reset the round results and scores, and play the computer semifinal
        setTimeout(() => {
            document.getElementById('roundResult').innerText = '';
            document.getElementById('overallResult').innerText = '';
            resetScores();
            playComputerSemiFinal();
        }, 3000);
    }
}

// Function to play the semifinal between Computer 2 and Computer 3
function playComputerSemiFinal() {
    // Hide the choices buttons
    document.querySelector('.choices').style.display = 'none';
    // Display the matchup
    document.getElementById('overallResult').innerText = 'Computer 2 vs. Computer 3';

    // Set an interval to play rounds automatically
    let interval = setInterval(() => {
        // Get the hands for both computers
        const hand1 = getHand();
        const hand2 = getHand();
        // Initialize the result of the round as an empty string
        let result = '';

        // Determine the result of the round
        if (hand1 === hand2) {
            result = "It's a tie!";
        } else if (
            (hand1 === 'rock' && hand2 === 'scissors') ||
            (hand1 === 'paper' && hand2 === 'rock') ||
            (hand1 === 'scissors' && hand2 === 'paper')
        ) {
            // If Computer 2 wins, increment its score
            computer2.score++;
            result = `Computer 2 wins this round!`;
        } else {
            // If Computer 3 wins, increment its score
            computer3.score++;
            result = `Computer 3 wins this round!`;
        }

        // Display the result of the round
        document.getElementById('roundResult').innerText = `Computer 2 played ${hand1}, Computer 3 played ${hand2}. ${result}`;
        // Update the scoreboard
        updateScores();

        // Check if either computer has won enough rounds to win the match
        if (computer2.score === playUntil || computer3.score === playUntil) {
            // Clear the interval to stop automatic play
            clearInterval(interval);
            // Determine the winner
            let winner = computer2.score === playUntil ? computer2 : computer3;
            // Add the winner to the semifinal winners array
            semiFinalWinners.push(winner);
            // After a short delay, reset the round results and scores, and play the final round
            setTimeout(() => {
                document.getElementById('roundResult').innerText = '';
                document.getElementById('overallResult').innerText = '';
                resetScores();
                playFinalRound();
            }, 3000);
        }
    }, 1000);
}

// Function to start the final round
function playFinalRound() {
    // Create an object for the final game with the two semifinal winners
    let finalGame = { player1: semiFinalWinners[0], player2: semiFinalWinners[1] };
    // Display the matchup
    document.getElementById('overallResult').innerText = `${finalGame.player1.name} vs. ${finalGame.player2.name}`;

    // Check if the player is in the final round
    if (finalGame.player1 === player || finalGame.player2 === player) {
        // Show the choices buttons and set their onclick events for the final round
        document.querySelector('.choices').style.display = 'block';
        document.getElementById('roundResult').innerText = 'Play your final round!';
        document.getElementById('rock').setAttribute("onClick", "javascript: playUserFinalRound('rock');");
        document.getElementById('paper').setAttribute("onClick", "javascript: playUserFinalRound('paper');");
        document.getElementById('scissors').setAttribute("onClick", "javascript: playUserFinalRound('scissors');");
    } else {
        // If the player is not in the final, play the final round between the computers
        document.querySelector('.choices').style.display = 'none';
        playComputerFinal(finalGame.player1, finalGame.player2);
    }
}

// Function to play a round between the user and the computer in the final round
function playUserFinalRound(playerHand) {
    // Create an object for the final game with the two semifinal winners
    const finalGame = { player1: semiFinalWinners[0], player2: semiFinalWinners[1] };
    // Determine the computer opponent
    let computer = finalGame.player1 === player ? finalGame.player2 : finalGame.player1;
    // Get the computer's hand
    const computerHand = getHand();
    // Initialize the result of the round as an empty string
    let result = '';

    // Determine the result of the round
    if (playerHand === computerHand) {
        result = "It's a tie!";
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper')
    ) {
        // If the player wins, increment the player's score
        result = `${player.name} wins this round!`;
        player.score++;
    } else {
        // If the computer wins, increment its score
        result = `${computer.name} wins this round!`;
        computer.score++;
    }

    // Display the result of the round
    document.getElementById('roundResult').innerText = `${player.name} played ${playerHand}, ${computer.name} played ${computerHand}. ${result}`;
    // Update the scoreboard
    updateScores();

    // Check if either player has won enough rounds to win the match
    if (player.score === playUntil || computer.score === playUntil) {
        // Determine the winner
        let winner = player.score === playUntil ? player : computer;
        // Declare the winner as the champion
        declareChampion(winner);
    }
}

// Function to play the final round between two computers
function playComputerFinal(computer1, computer2) {
    // Set an interval to play rounds automatically
    let interval = setInterval(() => {
        // Get the hands for both computers
        const hand1 = getHand();
        const hand2 = getHand();
        // Initialize the result of the round as an empty string
        let result = '';

        // Determine the result of the round
        if (hand1 === hand2) {
            result = "It's a tie!";
        } else if (
            (hand1 === 'rock' && hand2 === 'scissors') ||
            (hand1 === 'paper' && hand2 === 'rock') ||
            (hand1 === 'scissors' && hand2 === 'paper')
        ) {
            // If Computer 1 wins, increment its score
            computer1.score++;
            result = `${computer1.name} wins this round!`;
        } else {
            // If Computer 2 wins, increment its score
            computer2.score++;
            result = `${computer2.name} wins this round!`;
        }

        // Display the result of the round
        document.getElementById('roundResult').innerText = `${computer1.name} played ${hand1}, ${computer2.name} played ${hand2}. ${result}`;
        // Update the scoreboard
        updateScores();

        // Check if either computer has won enough rounds to win the match
        if (computer1.score === playUntil || computer2.score === playUntil) {
            // Clear the interval to stop automatic play
            clearInterval(interval);
            // Determine the winner
            let winner = computer1.score === playUntil ? computer1 : computer2;
            // Declare the winner as the champion
            declareChampion(winner);
        }
    }, 1000);
}

// Function to declare the champion of the tournament
function declareChampion(champion) {
    // Display the champion
    document.getElementById('overallResult').innerText = `${champion.name} is the world champion!`;
    // Hide the choices buttons once the champion is declared
    document.querySelector('.choices').style.display = 'none';
}

// Function to reset the scores of all players
function resetScores() {
    player.score = 0;
    computer1.score = 0;
    computer2.score = 0;
    computer3.score = 0;
    // Update the scoreboard
    updateScores();
}

// Function to update the scoreboard with the current scores
function updateScores() {
    document.getElementById('playerScore').innerText = player.score;
    document.getElementById('computer1Score').innerText = computer1.score;
    document.getElementById('computer2Score').innerText = computer2.score;
    document.getElementById('computer3Score').innerText = computer3.score;
}

// Function to reset the game to its initial state
function resetGame() {
    resetScores(); // Reset all scores
    semiFinalWinners = []; // Clear the semifinal winners array
    // Show the input section and hide the game section
    document.querySelector('.input-section').style.display = 'block';
    document.querySelector('.game-section').style.display = 'none';
    document.querySelector('.choices').style.display = 'block'; // Show the choices buttons
    document.getElementById('playerName').value = ''; // Clear the player name input
    document.getElementById('roundResult').innerText = ''; // Clear the round result text
    document.getElementById('overallResult').innerText = ''; // Clear the overall result text
    // Reset the onclick events for the choices buttons
    document.getElementById('rock').setAttribute("onClick", "javascript: playUserRound('rock');");
    document.getElementById('paper').setAttribute("onClick", "javascript: playUserRound('paper');");
    document.getElementById('scissors').setAttribute("onClick", "javascript: playUserRound('scissors');");
}
