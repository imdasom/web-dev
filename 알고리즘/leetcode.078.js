/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  return getSubset([...new Array(nums.length)].map(n=>0), nums, 0);
};

const getSubset = function(flagList, matchList, depth) {
  let subsetList = [];
  if(flagList.length == depth) {
    const subset = flagToSubset(flagList, matchList);
    subsetList.push(subset);
  } else {
    flagList[depth] = 0;
    const subset1 = getSubset(flagList, matchList, depth+1);
    subsetList = subsetList.concat(subset1);
    flagList[depth] = 1;
    const subset2 = getSubset(flagList, matchList, depth+1);
    subsetList = subsetList.concat(subset2);
  }
  return subsetList;
};

const flagToSubset = function(flagList, matchList) {
  let subset = [];
  flagList.forEach((flag, index) => { if(flag === 1) { subset.push(matchList[index]); } });
  return subset;
};

console.log(subsets([1, 2, 3, 4]));