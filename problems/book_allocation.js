
function isValid(arr, m, mid) {
  let st = 1;
  let pages = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[mid]) return false;

    if (pages + arr[i] > mid) {
        st++;
        pages = arr[i];
    } else {
      pages += arr[i];
    }
  }
  return st === m;
}

function allocateBooksPages(arr, m) {
  if (m > arr.length) return -1;

  let st = 0;
  let end = arr.reduce((curr, rec) => {
    return (rec += curr);
  });
  let ans = -1;

  let mid;
  for (let i = 0; st < end; i++) {
    mid = Math.floor((st + end) / 2);

    if(isValid(arr, m, mid)) {
        ans = mid;
        end = mid - 1;
    } else {
        st = mid + 1;
    }

  }

  return ans;

}
let arr = [2, 1, 3, 4]; // Books pages array

let m = 2; // Students:

console.log(allocateBooksPages(arr, m))