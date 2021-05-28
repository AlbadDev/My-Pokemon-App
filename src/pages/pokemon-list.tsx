import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon'; 
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-services'  ;
import {Link} from 'react-router-dom';
import PokemonSearch from '../components/PokemonSearch';

const PokemonList: FunctionComponent = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row">
          <PokemonSearch /> 
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <Link className='btn-floating btn-large waves-effect wave-light red z-depth-3'
          style={{position:'fixed',bottom:'25px'}}
          to='/pokemon/add'>
            <i className='material-icons'>add</i>
          </Link>
      </div>
    </div> 
  );
}
  
export default PokemonList;