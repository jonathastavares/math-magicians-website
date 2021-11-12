import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Quote from '../components/Quote';
import Home from '../components/Home';
import Calculator from '../components/Calculator';

describe('Testing Components', () => {
  it('Tests Home.js', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('Tests Quote.js', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });

  it('Tests Calculator.js', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByTestId('result')).toHaveValue('1');
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('result')).toHaveValue('3');
  });
});
