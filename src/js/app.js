export default class Validator {
  static validateUsername(username) {
    if (!(username.match(/^[A-Za-z0-9\-_]+$/))) {
      throw new Error('Недопустимые символы');
    }
    if (!(username.match(/^[A-Za-z]+.*[A-Za-z]+$/))) {
      throw new Error('Имя должно начинаться и заканчиваться буквой');
    }
    if (/\d{4}/.test(username)) {
      throw new Error('Не допускается использование более 3 цифр подряд');
    }
  }
}
