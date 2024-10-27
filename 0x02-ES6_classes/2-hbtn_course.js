export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name =
      typeof name === 'string'
        ? name
        : (() => {
            throw new TypeError('Name must be a string');
          })();
    this._length =
      typeof length === 'number'
        ? length
        : (() => {
            throw new TypeError('Length must be a number');
          })();
    this._students = Array.isArray(students)
      ? students
      : (() => {
          throw new TypeError('Must be an array');
        })();
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name =
      typeof name === 'string'
        ? name
        : (() => {
            throw new TypeError('Name must be a string');
          })();
  }

  get length() {
    return this._length;
  }

  set length(paramSize) {
    this._length =
      typeof paramSize === 'number'
        ? paramSize
        : (() => {
            throw new TypeError('Length must be a number');
          })();
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = Array.isArray(students)
      ? students
      : (() => {
          throw new TypeError('Must be an array');
        })();
  }
}
