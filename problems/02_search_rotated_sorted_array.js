const nums = [4, 5, 6, 7, 0, 1, 2];
const nums2 = [5, 1, 3];

function searchArray(nums, target) {
  console.log("runned");
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    console.log("runned", mid, start, end);
    if (nums[mid] === target) return mid;

    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

console.log("Result ======> ", searchArray(nums2, 5));

console.log("running");
