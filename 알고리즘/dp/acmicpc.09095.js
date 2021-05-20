// 9095 1,2,3 더하기

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let T = input[0];
  for (let t = 0; t < T; t++) {
	const result = oneTwoThree( Number(input[t + 1]) );
	console.log(result);
  }
});

function oneTwoThree(N) {
  var dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  
  for (var i = 4; i <= N; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
  }
  return dp[N];
}