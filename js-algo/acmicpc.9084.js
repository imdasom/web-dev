function coin(coins, price) {
  let dp = [...new Array(price + 1)]
    .map(() => {
      return 0;
    });
  dp[0] = 1;
  for (let c = 0; c < coins.length; c++) {
    for (let p = coins[c]; p <= price; p++) {
      dp[p] += dp[p - coins[c]];
    }
  }
  return dp[price];
}
