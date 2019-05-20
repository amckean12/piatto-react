const initialState = {
  currentUser: {},
  isLoggedIn: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state,
           currentUser: action.payload,
           isLoggedIn: true
        }
      default:
        return state;
    }
  }
