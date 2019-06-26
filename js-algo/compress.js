function solution(msg) {
    var dictionary = getAlphabetDictionary();
    var answer = [];
    for(var start = 0; start < msg.length;) {

        var existWord = msg[start];
        var nextWord = undefined;
        var end = start;
        for(; end < msg.length; end++) {
            nextWord = msg.substring(start, end + 1);
            if(dictionary.has(nextWord)) {
                existWord = nextWord;
            }
        }
        answer.push(dictionary.get(existWord));
        dictionary.set(nextWord, dictionary.size + 1);
        start = end + 1;
    }
    return answer;
}

function getAlphabetDictionary() {
    var dictionary = new Map();
    for(var charCode = 65; charCode < 91; charCode++) {
        dictionary.set(String.fromCharCode(charCode), charCode - 64);
    }
    return dictionary;
}   

// var input = "KAKAO";
// var outputExpected = [11, 1, 27, 15];
// var outputActual = solution(input);
var input = "TOBEORNOTTOBEORTOBEORNOT";
var outputExpected = [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34];
var outputActual = solution(input);

console.log(outputExpected);
console.log(outputActual);

for (var i = 0; i < outputExpected.length; i++) {
    if(outputExpected[i] !== outputActual[i]) {
        console.log(i);
        console.log("fail");
        break;
    }
}
