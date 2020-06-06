//11003
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', (line) => {
	input.push(line);
})
.on('close', () => {
	let N = input[0].split(' ')[0];
		N = Number(N);	
	let L = input[0].split(' ')[1];
		L = Number(L);	
	const arr = input[1].split(' ').map((str) => new Number(str));
	const cache = getMinArr(N, L, arr);
	console.log(cache[L]);
});

function getMinArr(N, L, arr) {
	let cache = [];
	for (let i = 0; i <= N; i++) {
		cache.push([]);
	}
	for (let i = 1; i <= N; i++) {
		let min = Number.MAX_SAFE_INTEGER;
		for (let j = 0; j < N; j++) {
			const emptyWindow = j + 1 < i;
			min = emptyWindow ? min : Math.min(min, arr[j]);
			cache[j + 1][j] = emptyWindow ? arr[0] : min;
		}
	}
	return cache;
}
