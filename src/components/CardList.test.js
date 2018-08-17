import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('ensures CardList rendered like snapshot', () => {
  const mockRobots = [{
    id: 1,
    name: 'unknown',
    email: 'unknown@unknown.com'
  }];

  expect(shallow(<CardList contacts={mockRobots}/>)).toMatchSnapshot();
});
