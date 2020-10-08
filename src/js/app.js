export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-z][0-9a-z_-]*[a-z]$/i.test(this.name) && !/\d{4,}/.test(this.name) ? 'nickname success' : 'invalid nickname';
  }
}
