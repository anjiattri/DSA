/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }
  for (let [key, value] of hash) {
    if (value === 1) {
      return key;
    }
  }
};
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function (nums) {
//     let xor=0
//     for(let i=0;i<nums.length;i++){
//         xor = xor ^ nums[i]
//     }
//     return xor
// }
console.log(singleNumber([4, 1, 2, 1, 2]));
