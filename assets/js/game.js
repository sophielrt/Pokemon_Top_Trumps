
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