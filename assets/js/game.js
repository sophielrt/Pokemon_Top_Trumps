// Function to get a random pokemon and call API
async function randomPokemon() {
    const pokemonNumber = Math.floor(Math.floor(Math.random() * 898) + 1);
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

// Global variables
let trainerPokemon = null;
let opponentPokemon = null;
let trainerScore = 0;
let opponentScore = 0;
let gameStarted = false;
let selectedStat = false;

// DOM elements
const trainerCard = document.getElementById('trainer-card');
const opponentCard = document.getElementById('opponent-card');
const gameMessage = document.getElementById('game-container');
const startButton = document.querySelectorAll('.start-button');
const nextRoundButton = document.getElementById('next-reset-button');
const trainerScoreElement = document.getElementById('trainer-score');
const opponentScoreElement = document.getElementById('opponent-score');
const darkModeButton = document.getElementById('dark-mode-button');

// Event listeners
startButton.addEventListener('click', startGame);
nextRoundButton.addEventListener('click', startNextRound);
darkModeButton.addEventListener('click', toggleDarkMode);

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

// Game Functions
async function startGame() {
    gameStarted = true;
    gameMessage.textContent = "Game started! Choose a stat to play.";
    startButton.style.display = 'none';
    nextRoundButton.style.display = 'none';

    // Reset any previous selections
    resetStatButtons();

    //Fetch new pokemon
    await loadNewPokemon();
    
    //Show players card, but hide the opponent's card
    trainerCard.classList.add('flipped');
    opponentCard.classList.remove('flipped');
}

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
    if (trainerCard.image) {
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

    const opponentImage = document.getElelmentById('opponent-image');
    opponentImage.innerHTML = '';
    if (opponentPokemon.image) {
        const img = document.createElement('img');
        img.src = opponentPokemon.image;
        img.alt = opponentPokemon.name;
        opponentImage.appendChild(img);
    }

    gameMessage.textContent = "Choose a stat to play!";
}

function selectStat(stat) {
    if (!gameStarted) return;

    selectedStat = stat;

    //Highlight the selected stat button
    resetStatButtons();
    document.getElementById(`#trainer-${stat}`).classList.add('selected');

    // Show the opponent's card
    opponentCard.classList.add('flipped');

    // Compare the selected stat
    setTimeout(() => {
        compareStats(stat);
    }, 1000); // Delay for 1 second card flip amimation
}

function compareStats(stat) {
    if (!trainerPokemon || !opponentPokemon) return;

    const trainerStat = trainerPokemon[stat];
    const opponentStat = opponentPokemon[stat];

    const trainerStatElement = document.getElementById(`#trainer-${stat}`);
    const opponentStatElement = document.getElementById(`#opponent-${stat}`);

    //Reset any previos highlighted stat
    const allTrainerStats = document.querySelectorAll(' #trainer-card .stat-btn');
    const allOpponentStats = document.querySelectorAll('#opponent-card .stat-btn');

    allTrainerStats.forEach(et => {
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
        gameMessage.textContent = `You win this round!`;
    } else if (trainerStat < opponentStat) {
        trainerStatElement.classList.add('loser');
        opponentStatElement.classList.add('winner');
        opponentScore++;
        gameMessage.textContent = `You lose this round!`;
    } else {
        trainerStatElement.classList.add('draw');
        opponentStatElement.classList.add('draw');
        gameMessage.textContent = `It's a draw! Both have ${trainerStat}`;
    }

    // Update the score
    trainerScoreElement.textContent = trainerScore;
    opponentScoreElement.textContent = opponentScore;

    // Show the next round button
    gameActive = false;
    nextRoundButton.style.display = 'block';
}



// Function to start the next round

function startNextRound() {
    startGame();
}

function resetStatButtons() {
    const statButtons = document.querySelectorAll('.stat-btn');
    statButtons.forEach(button => {
        button.classList.remove('selected', 'winner', 'loser', 'draw');
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

// Helper functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the game
function initGame() {
    // set up initial state
    gameMessage.textContent = "Welcome to Pokemon Top Trumps! Click 'Start Game' to begin.";
    trainerScoreElement.textContent = "0";
    opponentScoreElement.textContent = "0";
   
    //Make sure cards are in the initial state
    trainerCard.classList.remove('flipped');
    opponentCard.classList.remove('flipped');
}

// start the game
initGame();



