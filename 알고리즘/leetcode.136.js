/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((value, index, array) => index % 2 === 0 ? array[index] !== array[index+1] : false)[0];
};
