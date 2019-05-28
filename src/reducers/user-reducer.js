import * as types from '../actions/action-types';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  token: null,
  errors: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case types.AUTHENTICATION_REQUEST:
        return{
          ...state,
          isAuthenticating: true
        }
      case types.AUTHENTICATION_SUCCESS:
        return{
          ...state,
          isAuthenticated: true,
          isAuthenticating: false,
          currentUser: action.user,
          token: action.token
        }
        case types.AUTHENTICATION_FAILURE:
          return {
            isAuthenticated: false,
            isAuthenticating: false,
            currentUser: {},
            token: null,
            errors: action.errors || []
          }
      default:
        return state;
    }
  }
