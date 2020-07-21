import { validateEmail } from '../validations';

test('validate email format', () => {
  const email = validateEmail('foo@bar');
  const email2 = validateEmail('foo@bar.co');
  const email3 = validateEmail('foobar.co');
  const email4 = validateEmail('foo@bar.xyz');
  const email5 = validateEmail('123@456.789');

  expect(email).toBeFalsy();
  expect(email2).toBeTruthy();
  expect(email3).toBeFalsy();
  expect(email4).toBeTruthy();
  expect(email5).toBeFalsy();
});
