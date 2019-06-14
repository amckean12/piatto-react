import * as types from './action-types'
import RESET_ACTION from  './clear_store_action.js'

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}
