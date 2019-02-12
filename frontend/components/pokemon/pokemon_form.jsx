import React from 'react';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      attack: '',
      defense: '',
      poke_type: '',
      move1: '',
      move2: '',
      image_url: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field){
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createPokemon({ pokemon: this.state })
    .then(data => this.props.history.push(`/pokemon/${data.pokeData.pokemon.id}`));
  }

  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.update('name')}/>
          <input type="text" placeholder="Image Url" value={this.state.image_url} onChange={this.update('image_url')}/>
          <select name="" id="" onChange={this.update('poke_type')}>
            {window.POKEMON_TYPES.map(type => 
              <option key={type} value={type}>{type}</option>
            )}
          </select>
          <input type="text" placeholder="Attack" value={this.state.attack} onChange={this.update('attack')}/>
          <input type="text" placeholder="Defense" value={this.state.defense} onChange={this.update('defense')}/>
          <input type="text" placeholder="Move 1" value={this.state.move1} onChange={this.update('move1')}/>
          <input type="text" placeholder="Move 2" value={this.state.move2} onChange={this.update('move2')}/>
          <button>Create Pokemon</button>
        </form>
      </section>
    );
  }
}

export default PokemonForm;