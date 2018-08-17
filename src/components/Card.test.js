import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Card from './Card';

it('ensures Card rendered like snapshot', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})
