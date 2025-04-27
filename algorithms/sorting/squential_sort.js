let arr = [1, 22, 4, 54, 0, 17, 33, 2];

function log(...val) {
  console.log("Value ====> ", ...val);
}

function swap(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return;
}

function sqSort(arr) {
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      // For Desc sorting
      //   if (arr[minIndex] < arr[j]) {
      //     minIndex = j;
      //   }
      // For Asc sorting
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(minIndex, i, arr);
    }
  }

  return arr;
}

log(sqSort(arr));
