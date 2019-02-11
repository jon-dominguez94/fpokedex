export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'get',
    url: '/api/pokemon'
  })
};

export const fetchPokemon = id => {
  return $.ajax({
    method: 'get',
    url: `/api/pokemon/${id}`
  });
};