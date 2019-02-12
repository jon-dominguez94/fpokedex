import React from 'react';

const ItemDetail = props => {
  return (
    <section>
      <p>{props.item.name}</p>
      <p>{props.item.price}</p>
      <p>{props.item.happiness}</p>
    </section>
  );
}

export default ItemDetail;