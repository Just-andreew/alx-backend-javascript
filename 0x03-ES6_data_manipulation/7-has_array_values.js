function hasValuesFromArray(set, array) {
  if (!Set.prototype.isPrototypeOf(set) || !Array.isArray(array)) {
    throw new TypeError('Arguments must be Set and Array');
  }

  // Use Set's `every` method for efficient check
  return array.every((value) => set.has(value));
}

export default hasValuesFromArray;
