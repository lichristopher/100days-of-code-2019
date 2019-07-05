// First Implementation
function arrayFrom(list) {
  const newArray = [];

  for (let i = 0; i < list.length; i++) {
    newArray.push(list[i]);
  }

  return newArray;
}

// Second implementation
function arrayFrom() {
  return [].slice.call(arguments);
}
