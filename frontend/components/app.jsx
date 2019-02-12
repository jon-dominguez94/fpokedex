import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';


const App = () => (
  <div className="page">
    <section>
      <Route path="/" component={PokemonIndexContainer} />
    </section>
    <section>
      <Switch>
        <Route exact path="/" component={PokemonFormContainer} />
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </Switch>
    </section>
  </div>
);

export default App;