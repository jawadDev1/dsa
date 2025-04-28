let arr = [1, 223, 32, 24, 5, 26, 7];

function log(...val) {
  console.log("Value ====> ", ...val);
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return;
}

function findPivot(arr, s, e) {
  let pivot = e;
  let idx = s - 1;

  for (let j = s; j < e; j++) {
    if (arr[j] < arr[pivot]) {
      idx++;
      swap(arr, idx, j);
    }
  }

  idx++;
  swap(arr, idx, pivot);

  return idx;
}

function quickSort(arr, s, e) {
  if (s >= e) return;

  let pivotIndex = findPivot(arr, s, e);
  
  quickSort(arr, s, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, e);
}

quickSort(arr, 0, arr.length - 1);
log(arr);
