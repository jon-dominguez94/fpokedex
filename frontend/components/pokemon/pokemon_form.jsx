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

  render(){
    return(
      <div>form</div>
    );
  }
}

export default PokemonForm;