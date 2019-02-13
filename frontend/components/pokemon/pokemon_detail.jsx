import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

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
    window.scrollTo(0, 0);
    const pokeId = this.props.match.params.pokemonId;
    if (prevProps.match.params.pokemonId !== pokeId){
      this.props.fetchPokemon(pokeId);
    }
  }

  renderItems(){
    return this.props.items.map(item => {
      const pokeId = this.props.match.params.pokemonId;
      return (
        <Link key={item.id} to={`/pokemon/${pokeId}/item/${item.id}`}>
          <div className="item-box">
            <img src={item.image_url} alt=""/>
          </div>
        </Link>
      );
    });
  }

  renderMoves(){
    let result = "";
    if(!this.props.pokemon.moves) return "";
    for(let i = 0; i < this.props.pokemon.moves.length; i++){
      result += this.props.pokemon.moves[i];
      if (i !== this.props.pokemon.moves.length - 1) result += ', ';
    }
    return result;
  }

  render() {
    if(this.props.pokemon === undefined){
      return <div></div>;
    }
    return (
      <section className="flex-center detail">
        <div className="flex-center poke-img">
          <img src={this.props.pokemon.image_url} alt=""/>
        </div>
        <h1>{this.props.pokemon.name}</h1>
        <h2>Type: {this.props.pokemon.poke_type}</h2>
        <h2>Attack: {this.props.pokemon.attack}</h2>
        <h2>Defense: {this.props.pokemon.defense}</h2>
        <h2>Moves: {this.renderMoves()}</h2>
        <div id="items">
          <h1>Items</h1>
          <div className="flex-center" id="items-wrapper">
            {this.renderItems()}
          </div>
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ ItemDetailContainer } />
        </div>
      </section>
    );
  }
}

export default PokemonDetail;