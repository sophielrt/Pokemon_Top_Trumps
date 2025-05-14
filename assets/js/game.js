
// Function to get a random pokemon and call API
async function randomPokemon() {
    const pokemonNumber = Math.floor(Math.floor(Math, random() * 898) + 1);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        const data = await response.json();

        return {
            name: pokemon.name,
            id: pokemon.id,
            speed: pokemon.stats.find(stats => stats.stat.name === 'speed').base_stat,
            attack: pokemon.stats.find(stats => stats.stat.name === 'attack').base_stat,
            defense: pokemon.stats.find(stats => stats.stat.name === 'defense').base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.other['official-artwork']['front_default'],
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
const gameMessage = document.getElementById('game-message');
const startButton = document.querySelectorAll('.stat-button');
const nextRoundButton = document.getElementById('next-round-button');
const trainerScoreElement = document.getElementById('trainer-score');
const opponentScoreElement = document.getElementById('opponent-score');
const darkModeButton = document.getElementById('dark-mode-button');

// Event listeners
startButton.addEventListener('click', startGame);
nextRoundButton.addEventListener('click', startNextRound);
darkModeButton.addEventListener('click', toggleDarkMode);

// Stat selection button - event delegation
document.addEventListener('click', function (event) {
    if (!gameActive) return;

    const statButton = event.target.closest('.stat-button');
    if (!statButton) return;

    const stat = statButton.dataset.stat;
    if (stat) {
        selectStat(stat);
    }
}
);

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
    playerCard.classList.add('flipped');
    opponentCard.classList.remove('flipped');
}

async function loadNewPokemon() {

    const [player, opponent] = await Promise.all([
        randomPokemon(), 
        randomPokemon()
    ]);

    trainerPokemon = player;
    opponentPokemon = opponent;

    // Update the trainer card
    document.getElementById('trainer-name').textContent = trainerPokemon.name;
    document.getElementById('trainer-id').textContent = trainerPokemon.id;
    document.getElementById('trainer-speed').textContent = trainerPokemon.speed;
    document.getElementById('trainer-attack').textContent = trainerPokemon.attack;
    document.getElementById('trainer-defense').textContent = trainerPokemon.defense;
    document.getElementById('trainer-height').textContent = trainerPokemon.height;
    document.getElementById('trainer-weight').textContent = trainerPokemon.weight;

    const trainerImage = document.getElementById('trainer-image');
    trainerImage.innerHTML = '';
    if (trainerCard.image) {
        const img = document.createElement('img');
        img.src = trainerPokemon.image;
        img.alt = trainerPokemon.name;
        trainerImage.appendChild(img);
    }

    // Update the opponent card (not visible yet)
    document.getElementById('opponent-name').textContent = opponentPokemon.name;
    document.getElementById('opponent-id').textContent = opponentPokemon.id;
    document.getElementById('opponent-speed').textContent = opponentPokemon.speed;
    document.getElementById('opponent-attack').textContent = opponentPokemon.attack;
    document.getElementById('opponent-defense').textContent = opponentPokemon.defense;
    document.getElementById('opponent-height').textContent = opponentPokemon.height;
    document.getElementById('opponent-weight').textContent = opponentPokemon.weight;

    const oppoentImage = document.getElelmentById('opponent-image');
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
    document.getElementById(`player-${stat}`).classList.add('selected');

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

    const trainerStatElement = document.getElementById(`trainer-${stat}`);
    const opponentStatElement = document.getElementById(`opponent-${stat}`);

    //Reset any previos highlighted stat
    const allPlayerStats = document.querySelectorAll('.stat-btn');
    const allOpponentStats = document.querySelectorAll('.stat-btn');

    allPlayerStats.forEach(et => {
        el.classList.remove('winner', 'loser', 'draw');
    });

    allOpponentStats.forEach(el => {
        el.classList.remove('winner', 'loser', 'draw');

    });

    // Comapre and highlight the winner
    if (trainerStat > opponentStat) {
        trainerStatElement.classList.add('winner');
        opponentStatElement.classList.add('loser');
        playerScore++;
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