let arr = [1, 223, 32, 24, 5, 26, 7];

function log(...val) {
  console.log("Value ====> ", ...val);
}

function merge(arr, s, mid, e) {
  let temp = [];
  let i = s;
  let j = mid + 1;

  while (i <= mid && j <= e) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= e) {
    temp.push(arr[j]);
    j++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[s + i] = temp[i];
  }
}

function mergeSort(arr, s, e) {
  if (s == e) return;

  let mid = parseInt((s + e) / 2);

  // Left part
  mergeSort(arr, s, mid);
  // Right part
  mergeSort(arr, mid + 1, e);

  return merge(arr, s, mid, e);
}
mergeSort(arr, 0, arr.length - 1);
log(arr);
