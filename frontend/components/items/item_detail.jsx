import React from 'react';

const ItemDetail = props => {
  return (
    <section>
      <h1>{props.item.name}</h1>
      <h2>Happiness: {props.item.happiness}</h2>
      <h2>Price: ${props.item.price}</h2>
    </section>
  );
}

export default ItemDetail;