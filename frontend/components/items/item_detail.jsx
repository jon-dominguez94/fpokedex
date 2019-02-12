import React from 'react';

const ItemDetail = props => {
  if(!props.item){
    return <div></div>
  }
  return (
    <section>
      <h1>{props.item.name}</h1>
      <h2>Happiness: {props.item.happiness}</h2>
      <h2>Price: ${props.item.price}</h2>
    </section>
  );
}

export default ItemDetail;