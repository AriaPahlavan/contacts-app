import {
  CHANGE_SEARCH_FIELD,
  REQ_ROBOTS_PEND,
  REQ_ROBOTS_SUCC,
  REQ_ROBOTS_FAIL
} from './constants.js';

const initialState = {
  searchField: ''
};

export const searchRobots = (state=initialState, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

export const requestRobots = (state=initialState, action={}) => {
  switch (action.type) {
    case REQ_ROBOTS_PEND:
      return Object.assign({}, state, {isPending: true});
    case REQ_ROBOTS_SUCC:
      return Object.assign({}, state, {users: action.payload,
                                       isPending: false});
    case REQ_ROBOTS_FAIL:
      return Object.assign({}, state, {users: [],
                                       isPending: false,
                                       error: action.payload});
    default:
      return state;
  }
}
