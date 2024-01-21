const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let swap = true;
    let y = i;
    while (swap) {
      swap = false;
      if (arr[y] < arr[y - 1]) {
        swap = true;
        let temp = arr[y];
        arr[y] = arr[y - 1];
        arr[y - 1] = temp;
        y -= 1;
      }
    }
  }
  return arr;
};
