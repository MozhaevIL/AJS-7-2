import Validator from '../app';

test('must throw an error if username contains non-latin letters', () => {
  expect(() => {
    Validator.validateUsername('Игор');
  }).toThrow('Недопустимые символы');
});

test('must throw an error if username contains invalid symbols', () => {
  expect(() => {
    Validator.validateUsername('igor!igor');
  }).toThrow('Недопустимые символы');
});

test('must throw an error if username starts with non-letter', () => {
  expect(() => {
    Validator.validateUsername('1igor');
  }).toThrow('Имя должно начинаться и заканчиваться буквой');
});

test('must throw an error if username ends with non-letter', () => {
  expect(() => {
    Validator.validateUsername('igor1');
  }).toThrow('Имя должно начинаться и заканчиваться буквой');
});

test('must throw an error if username contains more then 3 digits in a row', () => {
  expect(() => {
    Validator.validateUsername('igor1234igor');
  }).toThrow('Не допускается использование более 3 цифр подряд');
});

test('must not throw an error if username is valid', () => {
  expect(() => {
    Validator.validateUsername('igor-123_igor');
  }).not.toThrow();
});
