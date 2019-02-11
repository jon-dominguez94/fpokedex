import { connect } from 'react-redux';
import { fetchPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mstp = (state, ownProps) => {
  const pokeId = ownProps.match.params.pokemonId;
  return ({
    pokemon: state.entities.pokemon[pokeId]
  });
};

const mdtp = dispatch => {
  return ({
    fetchPokemon: id => dispatch(fetchPokemon(id))
  });
};

export default connect(mstp, mdtp)(PokemonDetail);