import {shallow} from 'enzyme';
import React from 'react';
import SearchBox from './SreachBox';

it('ensurs SearchBox rendered like snapshot', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
