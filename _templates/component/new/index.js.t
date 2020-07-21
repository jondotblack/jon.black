---
to: src/components/<%= h.changeCase.camelCase(name) %>/<%= name %>.js
---
import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './<%= name %>.styled';

const propTypes = { };
const defaultProps = { };

<% if(locals.functional) { -%>
const <%= name %> = (props) => {
  return (
    <Styled.<%= name %>>edit me</Styled.<%= name %>>
  );
};
<% } else { -%>
class <%= name %> extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount() { }

  render() {
    const { } = this.props;
    const { } = this.state;

    return (
      <Styled.<%= name %>>edit me</Styled.<%= name %>>
    );
  }
};
<% } -%>

<%= name %>.propTypes = propTypes;
<%= name %>.defaultProps = defaultProps;

export default <%= name %>;
