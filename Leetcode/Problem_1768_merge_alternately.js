var mergeAlternately = function (word1, word2) {
  let mergedWord = "";
  for (let i = 0; i < word1.length; i++) {
    mergedWord = mergedWord + word1[i] + (word2[i] ?? "");
  }
  mergedWord += word2.substring(word1.length);
  return mergedWord;
};
