/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let numCountMap = {};
  nums.forEach((num, index) => { numCountMap[num] = (numCountMap[num] || 0) + 1; });
  let propertyList = Object.getOwnPropertyNames(numCountMap);
  for(let i = 0; i < propertyList.length; i++) {
    let num = propertyList[i];
    if(numCountMap[num] >= 2) {
      return num;
    }
  }
  return null;
};
// [2,2,2,2,2] => 2
// [1,3,4,2,2] => 2