import React from 'react';
import renderer from 'react-test-renderer';
import { act, fireEvent, render, screen } from 'utils/testing';

import { Input } from '../index';

const mockPlaceholder = 'george harrison';
const mockValue = 'john lennon';

describe('Input', () => {
  it('should render correctly with all props', () => {
    const tree = renderer.create(<Input name="name" placeholder={mockPlaceholder} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should update value correctly', async () => {
    render(<Input name="name" placeholder={mockPlaceholder} />);

    const name = screen.getByPlaceholderText(mockPlaceholder);

    await act(async () => {
      await fireEvent.change(name, { target: { value: mockValue } });
    });

    expect(name.value).toEqual(mockValue);
  });
});
