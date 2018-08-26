import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQ_ROBOTS_PEND,
  REQ_ROBOTS_SUCC,
  REQ_ROBOTS_FAIL
} from './constants.js';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

it('should change the search field', () => {
  const text = 'hellooo';
  const expectedResult = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };

  expect.assertions(1);
  expect(actions.setSearchField(text)).toEqual(expectedResult);
});

it('should change status to request kitties pending', () => {
  const store = mockStore();
  store.dispatch(actions.requestContacts());
  const action = store.getActions();

  expect.assertions(1);
  expect(action[0]).toEqual({ type: REQ_ROBOTS_PEND });
});
