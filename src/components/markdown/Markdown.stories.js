import React from 'react';

import { Container } from 'components/grid';
import { Markdown } from '.';

const mockMarkdown = `
  # h1 - title
  I'm baby taxidermy gentrify tattooed VHS vape chillwave. Freegan chia letterpress irony, quinoa yr fixie flexitarian pinterest. Pok pok artisan gochujang whatever leggings, biodiesel next level quinoa chia retro heirloom.

  ### h3 - title

  \`\`\`js
const output = 'hello world!';

const sayOutput = () => {
  console.log(output);
};

sayOutput();
  \`\`\`
`;

export default { title: 'Components | Markdown' };

export const base = () => (
  <Container>
    <Markdown>{mockMarkdown}</Markdown>
  </Container>
);
