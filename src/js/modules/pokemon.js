const BASE_URL = 'https://pokeapi.co';
const END_POINT = '/api/v2/pokemon?';
class PokemonAPI {
  nextUrl;
  prevUrl;

  constructor() {}

  getPokemon() {
    const PARAMS = new URLSearchParams({
      offset: 0,
      limit: 0,
    });

    const url = BASE_URL + END_POINT + PARAMS;
    return fetch(url).then(res => res.json());
  }
}
