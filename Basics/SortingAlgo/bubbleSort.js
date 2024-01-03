const bubbleSort = (arr) => {
  let loopEnd = arr.length;
  let swap;
  do {
    swap = false;
    for (let i = 0; i < loopEnd - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
    loopEnd--;
  } while (swap);
  return arr;
};
