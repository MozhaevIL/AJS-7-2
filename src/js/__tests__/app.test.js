import phoneNumberFormat from '../app';

test('must convert phone number into correct format', () => {
  const input = '8 (927) 000-00-00';
  const expected = '+79270000000';
  const recieved = phoneNumberFormat(input);

  expect(recieved).toBe(expected);
});

test('must convert phone number into correct format', () => {
  const input = '+7 960 000 00 00';
  const expected = '+79600000000';
  const recieved = phoneNumberFormat(input);

  expect(recieved).toBe(expected);
});

test('must convert phone number into correct format', () => {
  const input = '+86 000 000 0000';
  const expected = '+860000000000';
  const recieved = phoneNumberFormat(input);

  expect(recieved).toBe(expected);
});
