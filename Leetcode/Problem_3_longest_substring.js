var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let subString = s[0];
  let currentString = s[0];

  for (let i = 1; i < s.length; i++) {
    const index = currentString.indexOf(s[i]);
    if (index >= 0) currentString = currentString.substring(index + 1);
    currentString += s[i];
    if (currentString.length > subString.length) subString = currentString;
  }
  return subString.length;
};
