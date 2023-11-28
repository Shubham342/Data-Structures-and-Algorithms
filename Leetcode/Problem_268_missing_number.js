var missingNumber = function (nums) {
  let sumOfArray = nums.reduce((partialSum, a) => partialSum + a, 0);
  return (nums.length * (nums.length + 1)) / 2 - sumOfArray;
};
