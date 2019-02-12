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

export const createPokemon = data => {
  return $.ajax({
    method: 'post',
    url: '/api/pokemon',
    data
  });
};