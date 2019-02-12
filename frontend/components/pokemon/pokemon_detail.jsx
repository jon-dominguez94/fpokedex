import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);

    this.renderItems = this.renderItems.bind(this);
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

  renderItems(){
    return this.props.items.map(item => {
      return <img src={item.image_url} alt=""/>
    })
  }


  render() {
    if(this.props.pokemon === undefined){
      return <div></div>;
    }
    return (
      <section className="flex-center" id="detail">
        <div className="flex-center poke-img">
          <img src={this.props.pokemon.image_url} alt=""/>
        </div>
        <p>{this.props.pokemon.name}</p>
        <p>Type: {this.props.pokemon.poke_type}</p>
        <p>Attack: {this.props.pokemon.attack}</p>
        <p>Defense: {this.props.pokemon.defense}</p>
        <p>Moves: {this.props.pokemon.moves}</p>
        {/* <p>Items: {this.props.pokemon.item_ids}</p> */}
        {this.renderItems()}
      </section>
    );
  }
}

export default PokemonDetail;