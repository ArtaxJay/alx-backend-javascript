export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(currencySign) {
    this._code = currencySign;
  }

  get name() {
    return this._name;
  }

  set name(currencyName) {
    this._name = currencyName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
