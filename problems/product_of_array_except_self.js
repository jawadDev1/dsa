const arr = [-1,1,0,-3,3];

let answer = [];
const productExceptSelf = (nums) => {
  const lenght = nums.length;
  const prefixes = [1];
  const suffixes = Array(lenght).fill(1);
  console.log('su => ', suffixes)
  for (let i = 1; i < lenght; i++) {
    prefixes[i] = prefixes[i - 1] * nums[i - 1];
  }

  for (let i = lenght - 2; i >= 0; i--) {
    suffixes[i] = suffixes[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < lenght; i++) {
    answer[i] = suffixes[i] * prefixes[i];
  }
};

productExceptSelf(arr, 0);

console.log(answer);
