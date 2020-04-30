// 백준 1365 꼬인 전깃줄

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
  nums = nums.map((num) => Number(num));
  let result = lis(nums);
  console.log(N === 0 ? 0 : (N - result));
})

function top(arr) {
  return arr == null ? null : arr[arr.length - 1];
}

function lis(arr) {
  let lowerBoundArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (top(lowerBoundArr) < arr[i]) {
      lowerBoundArr.push(arr[i]);
    } else {
      let lowerBoundIndex = lowerBound(lowerBoundArr, arr[i]);
      lowerBoundArr[lowerBoundIndex] = arr[i];
    }
  }
  return lowerBoundArr.length;
}

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = (start + end) / 2;
    mid = Math.floor(mid);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}
