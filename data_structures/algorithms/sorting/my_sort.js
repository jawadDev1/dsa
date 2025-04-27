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

function myAscSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j, arr);
      }
    }
  }

  return arr;
}

function myDescSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j, arr);
      }
    }
  }

  return arr;
}

log(myAscSort(arr));
log(myDescSort(arr));
