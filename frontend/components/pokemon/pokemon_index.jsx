import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPokemon();
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.pokemon.map(poke => {
            return <li>
              <img src={poke.image_url} alt=""/>
              <span>{poke.name}</span>
            </li>
          })}
        </ul>
      </div>
    );
  }
};

export default PokemonIndex;