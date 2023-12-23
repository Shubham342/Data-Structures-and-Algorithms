var lengthOfLastWord = function (s) {
  const splitStringIntoArray = s.trimEnd().split(" ");
  return splitStringIntoArray[splitStringIntoArray.length - 1].length;
};
