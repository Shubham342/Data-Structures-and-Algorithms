var strStr = function (haystack, needle) {
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack.charAt(i) === needle.charAt(j)) {
      if (j === needle.length - 1) {
        return i - j;
      } else {
        i++;
        j++;
      }
    } else {
      i = i + 1 - j;
      j = 0;
    }
  }
  return -1;
};
