var sortedSquares = function (nums) {
  return nums.map((element) => element * element).sort((a, b) => a - b);
};
