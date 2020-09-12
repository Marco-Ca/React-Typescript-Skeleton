import React from 'react'
import { render } from '@testing-library/react'
import HomePage from '../HomePage'

describe('AdminNav', () => {
  it('should render HomePage', () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId('HomePage')).toBeTruthy();
  });
});