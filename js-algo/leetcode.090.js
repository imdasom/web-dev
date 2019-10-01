/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  let duplicateCount = {};
  nums.forEach(n => duplicateCount[n] = (duplicateCount[n] || 0) + 1);
  let arrDistinct = [];
  let arrMultiple = {}; // key: value, 2(중복되는숫자): 3(중복개수)
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(duplicateCount[num] === 1) {
      arrDistinct.push(num);
    } else if(duplicateCount[num] > 1 && arrMultiple.indexOf(num) === -1) {
      arrMultiple.push(num);
    }
  }
  console.log(arrDistinct);
  console.log(arrMultiple);
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

subsetsWithDup([1, 2, 2, 2, 3]);