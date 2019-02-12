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

  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.name}/>
          <input type="text" placeholder="Image Url" value={this.state.image_url}/>
          <select name="" id="">
            {window.POKEMON_TYPES.map(type => 
              <option key={type} value={type}>{type}</option>
            )}
          </select>
          <input type="text" placeholder="Attack" value={this.state.attack}/>
          <input type="text" placeholder="Defense" value={this.state.defense}/>
          <input type="text" placeholder="Move 1" value={this.state.move1}/>
          <input type="text" placeholder="Move 2" value={this.state.move2}/>
        </form>
      </section>
    );
  }
}

export default PokemonForm;