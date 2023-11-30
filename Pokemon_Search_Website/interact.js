function fetchPokemon() {
    var pokemonName = document.getElementById("pokemonInput").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then(response => response.json())
        .then(data => {
            displayPokemonImage(data.sprites.front_default);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function displayPokemonImage(imageUrl) {
    var container = document.getElementById("pokemonImageContainer");
    container.innerHTML = `<img src="${imageUrl}" alt="Pokemon Image" />`;
}
