const arr = [-2, -7, 1000, 5];
console.log(
  "Asc order: ",
  arr.sort((a, b) => a - b)
);
console.log(
  "DSC order: ",
  arr.sort((a, b) => b - a)
);

const strArry = ["apple", "mango", ["banana"]];
console.log(
  "Asc order: ",
  strArry.sort()
);
console.log(
  "DSC order: ",
  strArry.sort((a, b) => b - a)
);
