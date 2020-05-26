import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders without crash', () => {
    const wrapper = render(<App />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});