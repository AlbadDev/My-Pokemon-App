import Pokemon from '../models/pokemon';
 
export default class PokemonService {
  // Fetch pokemons from from the json-server
  static getPokemons(): Promise<Pokemon[]> {
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 
  // Fetch pokemon with the id and handle error
  static getPokemon(id: number): Promise<Pokemon|null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }


  // setup update a pokemon and save the data 
  static updatePokemon(pokemon:Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: 'PUT',
      body: JSON.stringify(pokemon),
      headers: {'Content-Type': 'application/json'}
    })
    .then(respone => respone.json())
    .catch(error => this.handleError(error))
  }
  
  // setup delete pokemon and save the data  
  static deletePokemon(pokemon: Pokemon): Promise<{}> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  // add a pokemon 
  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
  //  delete pokemon.created;

   return fetch('http://localhost:3001/pokemons', {
    method: 'POST',
    body: JSON.stringify(pokemon),
    headers: {'Content-Type': 'application/json'}
   })
   .then(response => response.json())
   .catch(error => this.handleError(error));
  }

  // handle empty data 
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
  // handle error
  static handleError(error: Error):void {
    console.error(error);
  }
}  