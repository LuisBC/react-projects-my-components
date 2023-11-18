import React from 'react';
import { render } from '@testing-library/react';
import { BasicText } from './text.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicText />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
