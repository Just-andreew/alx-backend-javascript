export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const index = array.indexOf(value); // Find the index of the current value
    array[index] = appendString + value;
  }

  return array;
}

