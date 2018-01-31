import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // ajouter la propriété 'delete: true' à l'utilisateur en cours de suppression
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // supprimer l'utilisateur supprimé de l'état
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // supprime la propriété 'delete': true et ajoute la propriété 'deleteError: [error]' à l'utilisateur 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // faire une copie de l'utilisateur sans 'supprimer': true
            const { deleting, ...userCopy } = user;
            // renvoie la copie de l'utilisateur avec la propriété 'deleteError: [error]'
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}