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

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < n - i - 11; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(j, j + 1, arr);
      }
    }
  }

  return arr;
}

log(bubbleSort(arr));
