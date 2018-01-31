import fetch from 'isomorphic-fetch';

function receive(data) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: data.Search,
    total: data.totalResults
  }
}

function error(data) {
  return {
    type: 'RECEIVE_ERROR_MOVIES'
  }
}


export function getMovies(s = "Batman") {
  return (dispatch) => {
    return fetch(`http://www.omdbapi.com/?s=${s}&type=movie`)
      .then((response) => response.json())
      .then((data) => dispatch(receive(data)))
      .catch((err) => dispatch(error(err)))
  }
}
