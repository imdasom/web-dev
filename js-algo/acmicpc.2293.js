let input = [];
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', (line) => {
	input.push(line);
})
.on('close', () => {
	let N = input[0].split(' ')[0];
		N = Number(N);	
	let K = input[0].split(' ')[1];
		K = Number(K);	
	const coins = input.slice(1).map((str) => new Number(str));
	const counts = countOfCoin(N, K, coins);
	console.log(counts[K - 1]);
});

function countOfCoin(N, K, coins) {
	let cache = [... new Array(K + 1)].map(() => 0);
	cache[0] = 1;
	for (coin in coins) {
		for (let k = coin; k <= K; k++) {
			cache[k] = cache[k] + cache[k - coin];
		}
	}
	return cache;
}
