import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';


const App = () => (
  <div className="page">
    <section>
      <Route path="/" component={PokemonIndexContainer} />
    </section>
    <section>
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
    </section>
  </div>
);

export default App;