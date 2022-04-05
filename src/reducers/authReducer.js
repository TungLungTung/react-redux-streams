import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

/// Khong phai la boolean la {} vi gia tri mac dinh cua state
/// Co the la null hoac true, false or anything else
{/* prettier-ignore */}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      return {...state, isSignedIn: true, userId: action.payload}
    case SIGN_OUT:
      return {...state, isSignedIn: false, userId: null}
    default:
      return state;
  }
};