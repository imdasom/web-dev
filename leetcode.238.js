/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var len = nums.length;
  var ans = new Array(len);
  for(var i = 0, temp = 1; i < len; i++) {
    ans[i] = temp;
    temp *= nums[i];
  }
  for(var i = len - 1, temp = 1; i >= 0; i--) {
    ans[i] *= temp;
    temp *= nums[i];
  }
  return ans;
};

//참고 https://dev.to/algobot76/leetcode-238-product-of-array-except-self-3n8p

/**
 * nums = [1, 2, 3, 4] 기준으로 곱셈해야 하는 인덱스만 적어보면
 * 첫번째for문 ==> X,       0,      0,1     0,1,2
 * 두번째for문 ==> 3,2,1,   3,2,    3       X
 * 두 for문을 모두 곱한다고 생각하면, 딱 자신의 인덱스만 없음!
 */