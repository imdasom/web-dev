/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var countArray = [];
  nums.forEach(function(num) {
    var index = -1;
    countArray.forEach(function(numObj, i) { if(numObj.number === num) { index = i; } });
    if(index == -1) {
      countArray.push({number: num, count: 1});
    } else {
      countArray[index] = {number: num, count: countArray[index].count + 1}
    }
  });
  return countArray
    .sort(function(numberObj1, numberObj2) { return numberObj2.count - numberObj1.count; })
    .map(function(numberObj) { return numberObj.number; })
    .slice(0, k);
};

console.log(topKFrequent([-1,-1], 1));
