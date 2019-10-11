/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  let duplicateCount = {}; // key: value, 2(중복되는숫자): 3(중복개수)
  nums.forEach(n => duplicateCount[n] = (duplicateCount[n] || 0) + 1);
  let list = getDistinctAndMultipleList(duplicateCount);
  let arrDistinct = list.arrDistinct;
  let arrMultipleList = list.arrMultiple; //[2, 3]

  let subsets = [];
  let subsetsDistinctList = getSubset([...new Array(arrDistinct.length)], arrDistinct, 0); // [ [], [1], [4], [5], [1,4], ... ]
  subsets = subsets.concat(subsetsDistinctList);

  for(let j = 0; j < arrMultipleList.length; j++) {
    let arrMultiple = arrMultipleList[j]; // 2
    let subsetsForList = []; // [ [2], [2,2], [2,2,2] ]
    for(let count = 1; count <= duplicateCount[arrMultiple]; count++) {
      subsetsForList.push([...new Array(count)].map(n=>arrMultiple));
    }
    let subsetsCopy = subsets.slice(0);
    let subsetNewCreated = [];
    for(let m = 0; m < subsetsForList.length; m++) {
      for(let k = 0; k < subsetsCopy.length; k++) {
        subsetNewCreated.push(subsetsForList[m].concat(subsetsCopy[k]));
      }
    }
    subsets = subsets.concat(subsetNewCreated);
  }
  return subsets;
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

function getDistinctAndMultipleList(duplicateCount) {
  let arrDistinct = [];
  let arrMultiple = [];
  const duplicateNums = Object.getOwnPropertyNames(duplicateCount);
  for(let i = 0; i < duplicateNums.length; i++) {
    let num = duplicateNums[i];
    let count = duplicateCount[num];
    if(count === 1) {
      arrDistinct.push(num);
    } else if(count > 1) {
      arrMultiple.push(num);
    }
  }
  return {arrDistinct, arrMultiple};
}

// console.log(subsetsWithDup([1, 2, 2, 2, 3, 3, 4, 5]));
console.log(subsetsWithDup([1,1,2,2]));