// Global variables
let trainerPokemon = null;
let opponentPokemon = null;
let trainerScore = 0;
let opponentScore = 0;
let roundsPlayed = 0;
let gameActive = false;
let selectedStat = false;

// DOM elements
const modal = document.getElementById("helpModal");
const btn = document.getElementById("help");
const span = document.getElementsByClassName("close")[0];
const trainerCard = document.getElementById('trainer-card');
const opponentCard = document.getElementById('opponent-card');
const startButton = document.getElementById('start-button');
const nextRoundButton = document.getElementById('next-reset-button');
const trainerScoreElement = document.getElementById('trainer-score');
const opponentScoreElement = document.getElementById('opponent-score');

//Help Modal
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Function to get a random pokemon and call API
async function randomPokemon() {
    const pokemonNumber = Math.floor((Math.random() * 898) + 1);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        const data = await response.json();

        return {
            name: data.name,
            id: data.id,
            speed: data.stats.find(stats => stats.stat.name === 'speed').base_stat,
            attack: data.stats.find(stats => stats.stat.name === 'attack').base_stat,
            defense: data.stats.find(stats => stats.stat.name === 'defense').base_stat,
            height: data.height,
            weight: data.weight,
            image: data.sprites.other['official-artwork'].front_default,
        };

    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        // Fall back in case of error - API not available
        return {
            name: "unknown",
            id: pokemonNumber,
            speed: 0,
            attack: 0,
            defense: 0,
            height: 0,
            weight: 0,
            image: null
        };
    }
}

// Event listeners
startButton.addEventListener('click', startGame);
nextRoundButton.addEventListener('click', startNextRound);

// Stat selection button - event delegation
document.addEventListener('click', function(event) {
    if (!gameActive) return;

    const statButton = event.target.closest('.stat-btn');
    if (!statButton) return;

    const stat = statButton.dataset.stat;
    if (stat) {
        selectStat(stat);
    }
});

// Helper function to flip a card with optional delay
function flipCard(cardElement, delay = 0) {
    setTimeout(() => {
        cardElement.classList.add('flipped');
    }, delay);
}

// Helper function to flip card back to initial state
function flipCardBack(cardElement, delay = 0) {
    setTimeout(() => {
        cardElement.classList.remove('flipped');
    }, delay);
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Reset function
function resetStatButtons() {
    const statButtons = document.querySelectorAll('.stat-btn');
    statButtons.forEach(button => {
        button.classList.remove('selected', 'winner', 'loser', 'draw');
    });
}

//Function to create and show the 5 round popup
document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continueGameBtn');
    const endBtn = document.getElementById('endGameBtn');
    const gameResultsModal = document.getElementById('gameResultsModal');

    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            gameResultsModal.style.display = 'none';
            resetGame();
            startGame();
        });
    }

    if (endBtn) {
        endBtn.addEventListener('click', () => {
            gameResultsModal.style.display = 'none';
            resetGame();
            startButton.style.display = 'block';
            nextRoundButton.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    if (gameResultsModal) {
        gameResultsModal.addEventListener('click', (event) => {
            if (event.target.id === 'gameResultsModal') {
                gameResultsModal.style.display = 'none';
                resetGame();
                startButton.style.display = 'block';
                nextRoundButton.style.display = 'none';
            }
        });
    }
});

// Function to show the 5 round popup
function show5RoundPopup() {
    const modal = document.getElementById('gameResultsModal');
    const title = document.getElementById('gameResultsTitle');
    const trainerScoreSpan = document.getElementById('finalTrainerScore');
    const opponentScoreSpan = document.getElementById('finalOpponentScore');
    
    //update scores
    trainerScoreSpan.textContent = trainerScore;
    opponentScoreSpan.textContent = opponentScore;

    // Determine winner and apply appropriate class
    title.className = 'game-results-title'; // Reset classes
    if (trainerScore > opponentScore) {
        title.textContent = 'Winner!';
        title.classList.add('winner');
    } else if (trainerScore < opponentScore) {
        title.textContent = 'You Lost!';
        title.classList.add('loser');
    } else {
        title.textContent = "It's a Draw!";
        title.classList.add('draw');
    }

    // Show the modal
    modal.style.display = 'flex';
}
  
// Function to reset the game
function resetGame() {
    trainerScore = 0;
    opponentScore = 0;
    roundsPlayed = 0;
    trainerScoreElement.textContent = "0";
    opponentScoreElement.textContent = "0";

    // Reset cards to initial state
    flipCardBack(trainerCard, 0);
    flipCardBack(opponentCard, 0);

    resetStatButtons();
}

// Main Game Functions 
// StartGame function
async function startGame() {
    gameActive = true;
    startButton.style.display = 'none';
    nextRoundButton.style.display = 'none';

    // Reset any previous selections
    resetStatButtons();

    //Fetch new pokemon
    await loadNewPokemon();
    
    // Flip the trainer card to show the Pokemon
    flipCard(trainerCard, 500);
}

// Load new Pokemon data
async function loadNewPokemon() {
    const [trainer, opponent] = await Promise.all([
        randomPokemon(), 
        randomPokemon()
    ]);

    trainerPokemon = trainer;
    opponentPokemon = opponent;

    // Update the trainer card
    document.querySelector('#trainer-name').textContent = capitalizeFirstLetter(trainerPokemon.name);
    document.querySelector('#trainer-id span').textContent = trainerPokemon.id;
    document.querySelector('#trainer-speed span').textContent = trainerPokemon.speed;
    document.querySelector('#trainer-attack span').textContent = trainerPokemon.attack;
    document.querySelector('#trainer-defense span').textContent = trainerPokemon.defense;
    document.querySelector('#trainer-height span').textContent = trainerPokemon.height;
    document.querySelector('#trainer-weight span').textContent = trainerPokemon.weight;

    const trainerImage = document.getElementById('trainer-image');
    trainerImage.innerHTML = '';
    if (trainerPokemon.image) {
        const img = document.createElement('img');
        img.src = trainerPokemon.image;
        img.alt = trainerPokemon.name;
        trainerImage.appendChild(img);
    }

    // Update the opponent card (not visible yet)
    document.querySelector('#opponent-name').textContent = capitalizeFirstLetter(opponentPokemon.name);
    document.querySelector('#opponent-id span').textContent = opponentPokemon.id;
    document.querySelector('#opponent-speed span').textContent = opponentPokemon.speed;
    document.querySelector('#opponent-attack span').textContent = opponentPokemon.attack;
    document.querySelector('#opponent-defense span').textContent = opponentPokemon.defense;
    document.querySelector('#opponent-height span').textContent = opponentPokemon.height;
    document.querySelector('#opponent-weight span').textContent = opponentPokemon.weight;

    const opponentImage = document.getElementById('opponent-image');
    opponentImage.innerHTML = '';
    if (opponentPokemon.image) {
        const img = document.createElement('img');
        img.src = opponentPokemon.image;
        img.alt = opponentPokemon.name;
        opponentImage.appendChild(img);
    }
}

// Function to select a stat
function selectStat(stat) {
    if (!gameActive) return;

    selectedStat = stat;
    gameActive = false;

    //Highlight the selected stat button
    resetStatButtons();
    document.getElementById(`trainer-${stat}`).classList.add('selected');

    // Flip the opponent's card to reveal their Pokemon
    flipCard(opponentCard, 300);

    // Compare stats after flip
    setTimeout(() => {
        compareStats(stat);
    }, 700);
}

// Function to compare stats
function compareStats(stat) {
    if (!trainerPokemon || !opponentPokemon) return;

    const trainerStat = trainerPokemon[stat];
    const opponentStat = opponentPokemon[stat];

    const trainerStatElement = document.getElementById(`trainer-${stat}`);
    const opponentStatElement = document.getElementById(`opponent-${stat}`);

    //Reset any previos highlighted stat
    const allTrainerStats = document.querySelectorAll('#trainer-card .stat-btn');
    const allOpponentStats = document.querySelectorAll('#opponent-card .stat-btn');

    allTrainerStats.forEach(el => {
        el.classList.remove('winner', 'loser', 'draw');
    });

    allOpponentStats.forEach(el => {
        el.classList.remove('winner', 'loser', 'draw');

    });

    // Comapre and highlight the winner
    if (trainerStat > opponentStat) {
        trainerStatElement.classList.add('winner');
        opponentStatElement.classList.add('loser');
        trainerScore++;
    } else if (trainerStat < opponentStat) {
        trainerStatElement.classList.add('loser');
        opponentStatElement.classList.add('winner');
        opponentScore++;
    } else {
        trainerStatElement.classList.add('draw');
        opponentStatElement.classList.add('draw');
    }

    // Update the score
    trainerScoreElement.textContent = trainerScore;
    opponentScoreElement.textContent = opponentScore;

    // Increment rounds played
    roundsPlayed++;

    // Check if 5 rounds have been played
    if (roundsPlayed >= 5) {
        setTimeout(() => {
            show5RoundPopup();
        }, 1500);
    }else {
        // Show next round button
        nextRoundButton.style.display = 'block';
    }
}

// Function to start the next round
function startNextRound() {
    // Reset the card to initial state
    flipCardBack(trainerCard, 0);
    flipCardBack(opponentCard, 0);

    // Start new game after card flip animation
    setTimeout(() => {
        startGame();
    }, 500);
}

// Function to reset the game
function initGame() {
    
    // Reset scores
    trainerScoreElement.textContent = "0";
    opponentScoreElement.textContent = "0";

    // shows card placeholders firs
    trainerCard.classList.remove('flipped');
    opponentCard.classList.remove('flipped');

    // show cards in their initial placeholder state
    trainerCard.style.display = 'block';
    opponentCard.style.display = 'block';

    // Reset any stat button states
    resetStatButtons();

    // Ensure cards are positioned correctly and visible
    setTimeout(() => {
        trainerCard.style.opacity = '1';
        opponentCard.style.opacity = '1';
        trainerCard.style.visibility = 'visible';
        opponentCard.style.visibility = 'visible';
    }, 100);
}

// start the game
initGame();