---
to: "<%= container === 'true' ? 'src/components/' + h.changeCase.camelCase(name) + '/' + name + 'Container.js' : null %>"
---
import React from 'react';
import PropTypes from 'prop-types';

import { <%= name %> } from '.';
import * as Styled from './<%= name %>.styled';

const propTypes = { };
const defaultProps = { };

<% if(locals.functional) { -%>
const <%= name %>Container = (props) => {
  return (
    <Styled.<%= name %>Container>
      <<%= name %> />
    </Styled.<%= name %>Container>
  );
};
<% } else { -%>
class <%= name %>Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount() { }

  render() {
    const { } = this.props;
    const { } = this.state;

    return (
      <Styled.<%= name %>Container>
        <<%= name %> />
      </Styled.<%= name %>Container>
    );
  }
}
<% } -%>

<%= name %>Container.propTypes = propTypes;
<%= name %>Container.defaultProps = defaultProps;

export default <%= name %>Container;
