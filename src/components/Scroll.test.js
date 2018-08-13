import {shallow} from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('ensurs Scroll rendered like snapshot', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
