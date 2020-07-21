---
to: src/components/<%= h.changeCase.camelCase(name) %>/<%= name %>.stories.js
---
import React from 'react';

import { <%= name %> } from '.';

export default { title: '<%= name %>' };

export const base = () => (
  <<%= name %> />
);