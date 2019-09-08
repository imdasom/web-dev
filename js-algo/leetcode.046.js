/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {

};

/**
 * @param fixNum
 * @param permutationList
 * @param depth
 * @param goalDepth
 */
const permutations = function(fixNum, permutationList, depth, goalDepth) {
  if(permutationList.length === 2) {
    // 출력

    return;
  }
  for(let i=0; i<permutationList.length; i++) {
    const fixNum = permutationList[i];
    const permutationList = permutationList.slice();
    const depth = depth + 1;
    permutations(fixNum, permutationList, depth, goalDepth);
  }
};