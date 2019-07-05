// First Implementation
function join(array, separator) {
  let combinedArrayElements = "";
  for (let index = 0; index < array.length - 1; index++) {
    const element = array[index];
    combinedArrayElements += element + separator;
  }
  combinedArrayElements += array[array.length - 1];
  return combinedArrayElements;
}

join([1, 2, 3, 4, 5]);
