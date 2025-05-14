
// Function to get a random pokemon and call API
async function randomPokemon() {
    const pokemonNumber = Math.floor(Math.floor(Math,random() * 898) + 1);
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
