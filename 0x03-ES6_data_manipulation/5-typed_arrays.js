function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || length < 0 || !Number.isInteger(length) ||
      typeof position !== 'number' || position < 0 || !Number.isInteger(position) ||
      typeof value !== 'number' || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;
  return int8Array;
}

export default createInt8TypedArray;
