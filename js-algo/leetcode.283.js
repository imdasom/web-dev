/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  for(let i = 0; i < nums.length-1; i++) {
    for(let j = 0; j < nums.length-1-i; j++) {
      let num1 = nums[j];
      let num2 = nums[j+1];
      if(num1 === 0) {
        nums[j] = num2;
        nums[j+1] = num1;
      }
    }
  }
};

let nums = [0,3,0,1,0,12];
moveZeroes(nums);
console.log(nums);