const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValueIndex] > arr[j]) {
        minValueIndex = j;
      }
    }
    if (i !== minValueIndex) {
      let temp = arr[i];
      arr[i] = arr[minValueIndex];
      arr[minValueIndex] = temp;
    }
  }
  return arr;
};
