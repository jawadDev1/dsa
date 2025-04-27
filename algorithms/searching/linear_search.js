let arr = [1, 3, 5, 23, 5, 54];

function log(val) {
  console.log("Value ====> ", val);
}

function search(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) return `Found ${num} at index ${i}`;
  }

  return `Not found`;
}

log(search(1, arr));
