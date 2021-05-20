// f(i, k) = i번째 코인으로 k를 만들수 있는 경우의 수
// dp[코인개수][목표금액]
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
    for (let i = 0; i < T; i++) {
        let N = Number(input[T * i + 1]);
        let coins = input[T * i + 2].split(' ').map((str) => Number(str));
        let M = Number(input[T * i + 3]);
        console.log(coinCount(coins, N, M));
    }
});

function coinCount(coins, N, M) {
    let dp = [...new Array(M + 1)].map((value, i) => { return i === 0 ? 1 : 0; });
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        for (let j = 1; j <= M; j++) {
            const prevCoinCount = i - 1 >= 0 ? dp[j] : 0;
            const currentCoinCount = j - coin >= 0 ? dp[j - coin] : 0;
            dp[j] = prevCoinCount + currentCoinCount;
        }
    }
    return dp[M];
}
