import React from 'react';
import defaultPokemon from './defaultPokemon';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({pokemon = defaultPokemon}) => {
  return (
		<div className='Pokedex'>
			{pokemon.map(p => (
			<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />))}
		</div>
	);
}

export default Pokedex;