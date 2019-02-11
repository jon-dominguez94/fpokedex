import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const pokeId = this.props.match.params.pokemonId;
    this.props.fetchPokemon(pokeId);
  }


  componentDidUpdate(prevProps) {
    const pokeId = this.props.match.params.pokemonId;
    if (prevProps.match.params.pokemonId !== pokeId){
      this.props.fetchPokemon(pokeId);
    }
  }


  render() {
    return (
      <div></div>
    );
  }
}

export default PokemonDetail;