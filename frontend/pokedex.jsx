import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContendLoaded", () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl)
});