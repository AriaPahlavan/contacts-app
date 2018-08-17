import {shallow} from 'enzyme';
import React from 'react';
import {
  CHANGE_SEARCH_FIELD,
  REQ_ROBOTS_PEND,
  REQ_ROBOTS_SUCC,
  REQ_ROBOTS_FAIL
} from './constants.js';

import * as reducers from './reducers';

it('ensures snapshot remains unchanged', () => {
  expect.assertions(1);
  expect(shallow(<reducers />)).toMatchSnapshot();
});

describe('test searchContacts', () => {
  it('returns initialStateSearch on empty action', () => {
    expect.assertions(1);
    expect(reducers.searchContacts(undefined, {}))
    .toEqual(reducers.initialStateSearch);
  });

  it('returns updated stated with payload of action', () => {
    expect.assertions(1);
    expect(reducers.searchContacts(undefined, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'gaga blagblag'
    })).toEqual({
      searchField: 'gaga blagblag'
    });
  });
});

describe('test requestContacts', () => {
  it('return initialStateContacts on empty action', () => {
    expect.assertions(1);
    expect(reducers.requestContacts(undefined, {}))
    .toEqual(reducers.initialStateContacts);
  });

  it('return pending on REQ_ROBOTS_PEND action type', () => {
    expect.assertions(1);
    expect(reducers.requestContacts(undefined, {
      type: REQ_ROBOTS_PEND
    }))
    .toEqual({
      users: [],
      isPending: true,
      error: ''
    });
  });

  const payload = {
    id: 1,
    name: 'Aria',
    email: 'aria@gmail.com'
  };

  it('return updated state with payload on REQ_ROBOTS_SUCC action type', () => {
    expect.assertions(1);

    expect(reducers.requestContacts(undefined, {
      type: REQ_ROBOTS_SUCC,
      payload: [payload]
    }))
    .toEqual({
      error: "",
      isPending: false,
      users: [{...payload}]
    });
  });

  it('return errors out state with payload on REQ_ROBOTS_FAIL action type', () => {
    expect.assertions(1);

    expect(reducers.requestContacts(undefined, {
      type: REQ_ROBOTS_FAIL,
      payload: 'failure!'
    }))
    .toEqual({
      error: 'failure!',
      isPending: true,
      users: []
    });
  });
});
