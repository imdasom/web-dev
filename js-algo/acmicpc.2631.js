// 3 7 5 2 6 1 4

function moveCount(N, children) {
  let dp = [...new Array(N)]
    .map(() => {
      return 1;
    });
  for (let i = 1; i < N; i++) {
    dp[i] = dp[i-1];
    for (let j = 0; j < i; j++) {
      if (children[i] > children[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }
  return N - dp[N-1];
}

console.log(moveCount(7, [3,7,5,2,6,1,4]));
