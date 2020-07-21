---
to: src/components/<%= h.changeCase.camelCase(name) %>/index.js
---
export { default as <%= name %> } from './<%= name %>';
<% if(locals.container === 'true') { -%>
export { default as <%= name %>Container } from './<%= name %>Container';
<% } -%>