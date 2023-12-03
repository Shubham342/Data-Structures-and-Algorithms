const checkTwoArraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2) {
      return false;
    }
  }
  return true;
};

// using every method
const checkTwoArraysAreEqualUsingEvery = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, i) => element === arr2[i])
  );
};

console.log(checkTwoArraysAreEqualUsingEvery([1, 2, 3], [1, 2, 3]));
console.log(checkTwoArraysAreEqualUsingEvery([1, 2, 4], [1, 2, 3]));
