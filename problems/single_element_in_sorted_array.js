let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let arr2 = [3, 3, 7, 7, 10, 11, 11];

function findIndex(nums) {
  let s = 0;
  let e = nums.length;
  let mid;

  for (let i = 1; s <= e; i++) {
    mid = parseInt((s + e) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }

    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid - 1]) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
  }

  return -1;
}

console.log(findIndex(arr2));
