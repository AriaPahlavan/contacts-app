import {
  CHANGE_SEARCH_FIELD,
  REQ_ROBOTS_PEND,
  REQ_ROBOTS_SUCC,
  REQ_ROBOTS_FAIL
} from './constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});


export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQ_ROBOTS_PEND });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({ type: REQ_ROBOTS_SUCC, payload: users }))
    .catch(error => dispatch({ type: REQ_ROBOTS_FAIL, payload: error }));
}
