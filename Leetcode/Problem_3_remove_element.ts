const removeElement = function (nums: number[], val: number) {
    let i = 0;
    while (i < nums.length) {
      if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
      } else {
        i++;
      }
    }
    return nums.length;
};