// 백준 2075 N번째큰수

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
  let matrix = [];
  for (let i = 1; i <= N; i++) {
	matrix.add(input[i].split(' '));
  }
  let result = greatestN(N, matrix);
  console.log(result);
});

function greatestN(N, matrix) {
  const priorityQueue = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      priorityQueue.push(matrix[i][j]);
      priorityQueue.sort((a, b) => { return a - b; });
      if (priorityQueue.length > N) {
        priorityQueue.splice(0, 1);		  
      }
    }
  }
  return priorityQueue[0];
}
