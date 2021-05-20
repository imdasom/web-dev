// 11054 가장 긴 바이토닉 부분 수열

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let N = input[0];
  let nums = input[1].split(' ');
  nums = nums.filter((num) => num != '').map((num) => Number(num));
  let result = lisBi(nums);
  console.log(result);
});

function lisBi(arr) {
  let lisAsc = lis(arr);
  let lisDesc = lis([...arr].reverse()).reverse();
  let max = 0;
  for (let i = 0; i < lisAsc.length; i++) {
    max = Math.max(lisAsc[i] + lisDesc[i], max);
  }
  return max - 1;
}

function lis(arr) {
  let dp = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }
  return dp;
}

Array.prototype.max = function () {
  let max = 0;
  for (let i = 0; i < this.length; i++) {
    max = Math.max(max, this[i]);
  }
  return max;
}
