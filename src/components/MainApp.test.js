import {shallow} from 'enzyme';
import React from 'react';
import MainApp from './MainApp';

let wrapper;
let mockProps;

beforeEach(() => {
   mockProps = {
    fetchContacts: jest.fn(),
    searchField: '',
    onSearch: jest.fn(),
    users: [],
    isPending: false
  };

  wrapper = shallow(<MainApp {...mockProps}/>);
});

it('ensures MainApp renders', () => {
  expect.assertions(1);
  expect(wrapper).toMatchSnapshot();
});

it('ensures "no kitties" get filtered correctly', () => {
  expect.assertions(1);
  expect(wrapper.instance().filterKitties()).toEqual([]);
});

it('ensures kitties get filtered correctly', () => {
  expect.assertions(1);

  const randomUser = {
    id: 1,
    name: 'Aria',
    email: 'aria@gmail.com'
  };
  mockProps.users = [randomUser]
  const wrapper2 = shallow(<MainApp {...mockProps}/>);
  expect(wrapper2.instance().filterKitties()).toEqual([randomUser ]);
});
