
// IN PROGRESS

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let N = Number(input[0]);
    console.log(tiling(N) % 10007);
});

function tiling(N) {
    let tile22 = [0, 0, 1, 1];
    let tile21 = [0, 1, 1, 3];
    let tile12 = [0, 0, 1, 1];
    for (let n = 4; n <= N; n++) {
        tile22.push( tile22[n-2]	+ tile21[n-2]	+ tile12[n-2] );
        tile21.push( tile22[n-1]	+ tile21[n-1]	+ tile12[n-1] );
        tile12.push( tile22[n-2]	+ tile21[n-2]	+ tile12[n-2] );
    }
    return tile22[N] + tile21[N] + tile12[N];
}
