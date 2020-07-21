---
to: src/components/<%= h.changeCase.camelCase(name) %>/<%= name %>.styled.js
---
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { theme } from 'styles/theme';

<% if(locals.container === 'true') { -%>
export const <%= name %>Container = styled.div``;
<% } -%>

export const <%= name %> = styled.div``;
