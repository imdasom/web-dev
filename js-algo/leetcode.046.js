/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  let resultList = [];
  permutes(nums, 0, nums.length-1, new Array(nums.length), resultList);
  return resultList;
};

/**
 * @param permutationList
 * @param depth
 * @param goalDepth
 * @param fixNumList
 */
const permutes = function(permutationList, depth, goalDepth, fixNumList, resultList) {
  if(depth === goalDepth) {
    fixNumList[depth] = permutationList[0];
    resultList.push(fixNumList.slice(0));
  }
  for(let i=0; i<permutationList.length; i++) {
    const fixNum = permutationList[i];
    const newPermutationList = permutationList.filter(value => value !== fixNum);
    fixNumList[depth] = fixNum;
    permutes(newPermutationList, depth + 1, goalDepth, fixNumList, resultList);
  }
};

console.log(permute([0, 1, 2, 3]));