export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('nam should be a string');
    if (!Number.isInteger(length)) throw new TypeError('length should be an integer');
    if (!Array.isArray(students)) throw new TypeError('students type should be an Array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name should be a string');
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (!Number.isInteger(val)) throw new TypeError('length should be an integer');
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) throw new TypeError('students type should be an Array');
    this._students = val;
  }
}
