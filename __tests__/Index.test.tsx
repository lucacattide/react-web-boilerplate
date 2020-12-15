// Module Start
// JS Imports
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Index from '../pages/index';

const index = <Index />;

// Index Unit Testing
describe('Index unit test', () => {
  test('It renders the Home page', () => {
    const wrapper = mount(index);

    expect(wrapper.find(Index)).toHaveLength(1);
  });
});
// Snapshot testing
describe('App snapshot test', () => {
  test('It matches snapshot', () => {
    const wrapper = shallow(index);

    expect(toJson(wrapper)).toMatchInlineSnapshot();
  });
});
// Module End
