// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = [6, 2, 10, 3];
function solution() {
    var x = input[0];
    var y = input[1];
    var w = input[2];
    var h = input[3];
    var distance = 1000;
    if(x - 0 < distance) {
        distance = x - 0;
    }
    if(y - 0 < distance) {
        distance = y - 0;
    }
    if(h - y < distance) {
        distance = h - y;
    }
    if(w - x < distance) {
        distance = w - x;
    }
    return distance;
}

console.log(solution());
