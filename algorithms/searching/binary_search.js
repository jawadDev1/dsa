let arr = [1, 2, 3, 4, 5, 6, 7];

function log(val) {
  console.log("Value ====> ", val);
}

function binarySearch(num, arr) {
  let s = 0;
  let e = arr.length - 1;
  let mid;

  for (let i = 0; i < arr.length; i++) {
    mid = (s + e) / 2;

    if (arr[mid] === num) {
      return `Found ${num}`;
    } else if (arr[mid] < num) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return `Not found`;
}

log(binarySearch(2, arr));
