export default class HolbertonCourse {
  constructor(name, length, students) {
    this._setName(name);
    this._setLength(length);
    this._setStudents(students);
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    // Return a copy of the students array to prevent modification from outside
    return [...this._students];
  }

  // Setters with type checking
  _setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  _setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  _setStudents(students) {
    if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  // Setter for public access (avoid direct property modification)
  set name(newName) {
    this._setName(newName);
  }

  set length(newLength) {
    this._setLength(newLength);
  }

  set students(newStudents) {
    this._setStudents(newStudents);
  }
}
