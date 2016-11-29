import * as types from '../actions/actions';
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.FETCH_POSTS:
      return Object.assign({}, state, { all: action.payload.data});
    default:
      return state;
  }
}
