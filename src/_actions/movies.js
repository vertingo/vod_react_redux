import fetch from 'isomorphic-fetch';


export const moviesActions = {
  receive,
  error,
  getMovies
};

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


function getMovies(s = "Batman") {
  return (dispatch) => {
    return fetch(`http://www.omdbapi.com/?s=${s}&type=movie&apikey=63154a5b`)
      .then((response) => response.json())
      .then((data) => dispatch(receive(data)))
      .catch((err) => dispatch(error(err)))
  }
}
