/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let naturalsum = (nums.length * (nums.length + 1)) / 2;
  return naturalsum - sum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
