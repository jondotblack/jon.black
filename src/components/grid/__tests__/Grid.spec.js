import React from 'react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect';

import { Col, Container, Row } from '../index';

describe('Grid', () => {
  it('should render a row correctly with all props', () => {
    const tree = renderer.create(<Row>row content</Row>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a container correctly with all props', () => {
    const tree = renderer.create(<Container fluid>container content</Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render width styles correctly with span prop', () => {
    const tree = renderer.create(<Col span={{ md: 2, lg: 3, xl: 4 }}>column content</Col>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render offset styles correctly with prop', () => {
    const tree = renderer.create(<Col offset={{ md: 1, lg: 3 }}>column content</Col>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render order styles correctly with prop', () => {
    const tree = renderer.create(<Col order={{ md: 1, lg: 2 }}>column content</Col>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
