// 2565

// 8 2 9 1 4 6 7 10

const readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

let input = [];
rl.on('line', function(line) {
        input.push(line);
}).on('close', function() {
        let N = input[0];
        let lines = new Array(N);
        for (let i = 0; i < N; i++) {
                let line = input[i+1].split(' ');
                lines[line[0]-1] = line[1];
                console.log(lines);
        }                                                                                            
        lines = lines.filter((line) => line != null);
        let result = lis(lines);
        console.log(N - result);
        process.exit();
});

function lis(arr) {
        var max = 0;
        var dp = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
                dp[i] = 1;
                for (let j = 0; j < i; j++) {
                        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                                dp[i] = dp[j] + 1;
                                max = Math.max(max, dp[i]);
                        }
                }
        }
        return max;
}
      
