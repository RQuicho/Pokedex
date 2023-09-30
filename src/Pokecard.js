import React from 'react';
import "./Pokecard.css";

const Pokecard = ({id, name, type, base_experience}) => {
  return (
	<div className='Pokecard'>
		<h1 className='Pokecard-name'>{name}</h1>
		<img className='Pokecard-img' src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
		<p className='Pokecard-type'>Type: {type}</p>
		<p className='Pokecard-exp'>EXP: {base_experience}</p>
	</div>
  );
}

export default Pokecard;