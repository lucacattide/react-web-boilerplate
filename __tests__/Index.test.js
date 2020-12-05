// Module Start
// JS Imports
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Index from '../pages/index';

const index = <Index />;

// Index Unit Testing
describe('Index unit test', () => {
  test('It renders the Index page without crashing', () => {
    const wrapper = mount(index);

    expect(wrapper.find(Index)).toHaveLength(1);
  });
});
// Snapshot testing
describe('App snapshot test', () => {
  test('It renders the root App without crashing', () => {
    const wrapper = mount(index);

    expect(toJson(wrapper)).toMatchInlineSnapshot();
  });
});
// Module End
