/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  let duplicateCount = {}; // key: value, 2(중복되는숫자): 3(중복개수)
  nums.forEach(n => duplicateCount[n] = (duplicateCount[n] || 0) + 1);
  let arrDistinct = getDistinctList(duplicateCount); //[1, 4, 5]
  let arrMultipleList = getMultipleList(duplicateCount); //[2, 3]

  let subsets = [];
  let subsetsDistinctList = getSubset([...new Array(arrDistinct.length)], arrDistinct, 0); // [ [], [1], [4], [5], [1,4], ... ]
  let subsetNewCreated = subsetsDistinctList.slice(0);
  for(let j = 0; j < arrMultipleList.length; j++) {
    let arrMultiple = arrMultipleList[j]; // 2
    let subsetsForList = []; // [ [2], [2,2], [2,2,2] ]
    for(let count = 1; count <= duplicateCount[arrMultiple]; count++) {
      subsetsForList.push([...new Array(count)].map(n=>arrMultiple));
    }
    let subsetNewCreatedTemp = [];
    for(let m = 0; m < subsetsForList.length; m++) {
      for(let k = 0; k < subsetNewCreated.length; k++) {
        console.log('merge');
        console.log(subsetsForList[m]);
        console.log(subsetNewCreated[k]);
        subsetNewCreatedTemp.push(subsetsForList[m].concat(subsetNewCreated[k]));
      }
    }
    subsetNewCreated = subsetNewCreatedTemp;
  }
  return subsetNewCreated.concat(subsetsDistinctList);
};

const mergeSubsets = function(subsetDistinct, subsetsForList) {
  let subsets = [];
  for(let k = 0; k < subsetsForList.length; k++) {
    const subsetFor = subsetsForList[k]; // [2]
    let newSubsets = subsetDistinct.concat(subsetFor); //[2]
    subsets.push(newSubsets);
  }
  console.log('merge');
  console.log(subsetDistinct);
  console.log(subsetsForList);
  console.log(subsets);
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

function getDistinctList(duplicateCount) {
  let arrDistinct = [];
  const duplicateNums = Object.getOwnPropertyNames(duplicateCount);
  for(let i = 0; i < duplicateNums.length; i++) {
    let num = duplicateNums[i];
    let count = duplicateCount[num];
    if(count === 1) {
      arrDistinct.push(num);
    }
  }
  return arrDistinct;
}

function getMultipleList(duplicateCount) {
  let arrMultiple = [];
  const duplicateNums = Object.getOwnPropertyNames(duplicateCount);
  for(let i = 0; i < duplicateNums.length; i++) {
    let num = duplicateNums[i];
    let count = duplicateCount[num];
    if(count > 1) {
      arrMultiple.push(num);
    }
  }
  return arrMultiple;
}

// console.log(subsetsWithDup([1, 2, 2, 2, 3, 3, 4, 5]));
console.log(subsetsWithDup([1,1,2,2]));