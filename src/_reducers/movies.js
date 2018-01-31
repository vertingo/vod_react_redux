const initial = {
    list: [],
    total: 0
  }
  
  export default function movies(state = initial, action) {
    switch (action.type) {
      case 'RECEIVE_MOVIES':
        return Object.assign({}, state, {
          list: action.movies,
          total: action.total
        });
      case 'RECEIVE_ERROR_MOVIES':
        return Object.assign({}, state, initial);
      default:
        return state
    }
  }
  