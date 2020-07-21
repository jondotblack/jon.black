import { slugify } from '../slugify';

test('slugify correctly formats a value to url friendly string', () => {
  const title = 'I AM baby 2 shaman.Williamsburg palo & santo              ';
  const slug = slugify(title);

  expect(slug).toMatch('i-am-baby-2-shaman-williamsburg-palo-and-santo');
});
