import React from 'react';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      attack: '',
      defense: '',
      poke_type: '',
      moves: [],
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
    const moves = [];
    if(this.state.move1) moves.push(this.state.move1);
    if(this.state.move2) moves.push(this.state.move2);
    this.setState({ moves }, () => {
      this.props.createPokemon({ pokemon: this.state })
      .then(data => this.props.history.push(`/pokemon/${data.pokeData.pokemon.id}`));
    });
  }

  render(){
    return(
      <section className="flex-center column detail" id="form-section"> 
        <div >
          <img id="poke-logo" src={window.pokeLogo} alt=""/>
        </div>
        <form className="flex-center column" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.update('name')}/>
          <input type="text" placeholder="Image Url" value={this.state.image_url} onChange={this.update('image_url')}/>
          <select name="" id="" value={this.state.poke_type} onChange={this.update('poke_type')}>
            <option value="">Select a Type</option>
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