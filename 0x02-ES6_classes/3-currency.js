export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters with type checking (implicit in constructor)

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
