var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
};
var missingNumber = function (nums) {
  let sumOfArray = nums.sumOfArray
};