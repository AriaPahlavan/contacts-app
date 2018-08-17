import {shallow} from 'enzyme';
import React from 'react';
import SearchBox from './SreachBox';

it('ensures SearchBox rendered like snapshot', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
