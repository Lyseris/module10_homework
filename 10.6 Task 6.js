const arr = [1,1,1,1];

function allAreEqual(array) {
  const result = array.every(element => {
    if (element === array[0]) {
      return true;
  }
});
  return result;
}

console.log(allAreEqual(arr));
