var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var N = input[0];
var line = input[1].split(' ');
var result = lineToLine(line);
console.log(result);

function lineToLine(line) {
  var dp = [];
  dp[0] = line[0];
  var max = 0;
  for (var i = 1; i < line.length; i++) {
    dp[i] = line[i];
    for (var j = 0; j < i; j++) {
      if (line[i] > line[j] && dp[i] < dp[j] + line[i]) {
        dp[i] = dp[j] + line[i];
      }
    }
    if (max < dp[i]) {
      max = dp[i];
    }
  }
  return max;
}
