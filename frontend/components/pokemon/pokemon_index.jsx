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
          {this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />)}
        </ul>
      </div>
    );
  }
};

export default PokemonIndex;