import React from 'react';

import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from 'utils/testing';

import { Button } from '../index';

describe('Button', () => {
  const mockOnClick = jest.fn();
  const text = 'call to action';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render as a button correctly with all props', () => {
    const tree = renderer.create(<Button>{text}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as a link correctly with all props', () => {
    const tree = renderer.create(<Button href="https://www.helloroot.co">{text}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fire onClick event correctly', () => {
    render(<Button onClick={mockOnClick}>{text}</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not fire onClick event when disabled', () => {
    render(
      <Button onClick={mockOnClick} disabled>
        {text}
      </Button>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveTextContent(text);
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });

  it('should not fire onClick event or display children when loading', () => {
    render(
      <Button onClick={mockOnClick} loading>
        {text}
      </Button>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).not.toHaveTextContent(text);
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
