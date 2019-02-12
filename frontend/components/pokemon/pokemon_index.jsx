import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPokemon();
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.pokemon.map(poke => 
            <div key={poke.id}>
              <hr/>
              <PokemonIndexItem poke={poke} />
            </div>
          )}
        </ul>
      </div>
    );
  }
};

export default PokemonIndex;