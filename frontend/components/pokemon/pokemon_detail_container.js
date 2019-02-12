import { connect } from 'react-redux';
import { fetchPokemon } from '../../actions/pokemon_actions';
import { getItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mstp = (state, ownProps) => {
  const pokeId = ownProps.match.params.pokemonId;
  const pokemon = state.entities.pokemon[pokeId];
  const items = pokemon ? getItems(state, pokemon.item_ids) : [];
  return ({
    pokemon,
    items
  });
};

const mdtp = dispatch => {
  return ({
    fetchPokemon: id => dispatch(fetchPokemon(id))
  });
};

export default connect(mstp, mdtp)(PokemonDetail);