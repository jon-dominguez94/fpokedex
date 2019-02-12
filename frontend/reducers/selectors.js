export const selectAllPokemon = state => {
  return Object.values(state.entities.pokemon);
};

export const getItems = (state, ids) => {
  return ids ? ids.map(id => state.entities.items[id]) : []
};