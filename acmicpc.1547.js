// 4
// 3 1
// 2 3
// 3 1
// 3 2
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    console.log(input);
    process.exit();
});
