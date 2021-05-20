/*
https://leetcode.com/problems/max-increase-to-keep-city-skyline/
Example:
  Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation:
  The grid is:
  [ [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

  gridNew = [ [8, 4, 8, 7],
    [7, 4, 7, 7],
    [9, 4, 8, 7],
    [3, 3, 3, 3] ]
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  // 가로로 MAX를 찾아서 배열A 만든다
  // 세로로 MAX를 찾아서 배열B 만든다

  // 배열A와 배열B를 비교햐여 작은 것으로 건물을 세운다

  var leftOrRightSkyline = [];
  grid.forEach(value =>
    leftOrRightSkyline.push(Math.max.apply(null, value)
    )
  );

  var topOrBottomSkyline = [];
  for(var i = 0; i < grid[0].length; i++) {
    var max = 0;
    for(var j = 0; j < grid.length; j++) {
      if(grid[j][i] > max) {
        max = grid[j][i];
      }
    }
    topOrBottomSkyline.push(max);
  }

  var sum = 0;
  for(var i = 0; i < leftOrRightSkyline.length; i++) {
    for(var j = 0; j < topOrBottomSkyline.length; j++) {
      var maxHeight = Math.min(leftOrRightSkyline[i], topOrBottomSkyline[j]);
      var currentHeight = grid[j][i];
      var increase = maxHeight - currentHeight;
      sum += increase;
    }
  }
  return sum;
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));