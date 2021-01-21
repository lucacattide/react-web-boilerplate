// Module Start
// JS Imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

const component = <Index />;

// Index Unit Testing
describe('Index unit test', () => {
  test('It renders the Home page', () => {
    render(component);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
// Module End
