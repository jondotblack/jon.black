import React from 'react';
import renderer from 'react-test-renderer';

import { List } from '../index';

describe('List', () => {
  it('should render correctly with all props', () => {
    const tree = renderer
      .create(
        <List>
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
          <List.Item>Three</List.Item>
        </List>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
