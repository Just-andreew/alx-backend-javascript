function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Argument must be an array');
  }

  return new Set(array);
}

export default setFromArray;
