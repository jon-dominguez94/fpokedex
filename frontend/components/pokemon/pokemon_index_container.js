import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { fetchAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mstp = state => {
  return ({
    pokemon: selectAllPokemon(state),
    loading: state.ui.loading
  });
};

const mdtp = dispatch => {
  return ({
    fetchAllPokemon: () => dispatch(fetchAllPokemon())
  });
};

export default connect(mstp, mdtp)(PokemonIndex);