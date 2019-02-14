import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mstp = state => {
  return ({
    errors: state.errors.pokemon
  });
};

const mdtp = dispatch => {
  return ({
    createPokemon: data => dispatch(createPokemon(data))
  });
};

export default connect(mstp, mdtp)(PokemonForm);