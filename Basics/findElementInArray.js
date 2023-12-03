//find element using loop
const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) return true;
  }
  return false;
};

// using javascript method
arr.includes(target);

// finding index USING LOOP
const findIndexOfElement = (arr, target) => {
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

// finding index using javascript method
arr.indexOf(target);
