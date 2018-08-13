import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Card from './Card';

it('ensurs Card rendered like snapshot', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})
