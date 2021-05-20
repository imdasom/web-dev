const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  let N = lines[0].split(' ')[0];
      N = Number(N);
  let M = lines[0].split(' ')[1];
      M = Number(M);
  let arr = lines[1].split(' ');
      arr = arr.map((str) => Number(str));
  const result = sumCount(N, M, arr);
  console.log(result);
});

function sumCount(N, M, arr) {
  const moveEndPointer = function() {
    e++;
    sum += ifNull(arr[e], 0);
  }
  const moveStartPointer = function() {
    sum -= ifNull(arr[s], 0);
    s++;
  }
  
  let s = 0;
  let e = 0;
  let sum = arr[e];
  let count = 0;

  while (e < N) {
    const whenEqualTwoPointer     = s === e;
    const whenEqualPointerAndSum  = arr[s] === M;

    if (whenEqualTwoPointer) {
      if (whenEqualPointerAndSum) count++;
      moveEndPointer();

    } else {
      if (sum === M) {
        count++;
        moveEndPointer();

      } else if (sum < M) {
        moveEndPointer();

      } else if (sum > M) {
        moveStartPointer();
      }
    }
  }
  return count;
}

function ifNull(value, ifNullValue) {
  return value == null ? ifNullValue : value;
}