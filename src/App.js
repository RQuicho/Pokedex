import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import defaultPokemon from './defaultPokemon';
import './App.css';

const App = () => {
  return (
    <div>
      {/* <Pokecard 
        id={4}
        name='Charmander'
        type='fire'
        base_experience={62}/> */}
      <Pokedex pokemon={defaultPokemon}/>
    </div>
  );
}

export default App;
