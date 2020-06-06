// 1 2 3
// 4 5 6
// 4 9 0

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const N = input[0];
	let lines = [];
	for (let i = 0; i < N; i++) {
		lines.push(input[i+1].split(' ').map((str) => new Number(str)));
	}
	const max = getMaxSum(N, lines);
	const min = getMinSum(N, lines);
	console.log(max + ' ' + min);
});

function getMaxSum(N, lines) {
	let max = lines[0].slice();
	for (let i = 1; i < N; i++) {
		const max0 = lines[i][0] + Math.max(max[0], max[1]);
		const max1 = lines[i][1] + Math.max(Math.max(max[0], max[1]), max[2]);
		const max2 = lines[i][2] + Math.max(max[1], max[2]);
		max[0] = max0;
		max[1] = max1;
		max[2] = max2;
	}
	return Math.max(Math.max(max[0], max[1]), max[2]);
}

function getMinSum(N, lines) {
	let min = lines[0].slice();
	for (let i = 1; i < N; i++) {
		const min0 = lines[i][0] + Math.min(min[0], min[1]);
		const min1 = lines[i][1] + Math.min(Math.min(min[0], min[1]), min[2]);
		const min2 = lines[i][2] + Math.min(min[1], min[2]);
		min[0] = min0;
		min[1] = min1;
		min[2] = min2;
	}
	return Math.min(Math.min(min[0], min[1]), min[2]);
}
