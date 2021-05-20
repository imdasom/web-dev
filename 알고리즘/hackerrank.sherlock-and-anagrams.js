/**
* https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
* 
* 1. 문자열의 부분집합을 구한다.
* 2. 부분집합의 각 원소는 정렬된 상태이어야 한다.
* 3. 부분집합에서 각 원소가 몇개 있는지 개수를 구한다.
* 4. nC2 로 각 원소별로 조합의 경우의 수를 구하여 모두 더한다.
*/
function sherlockAndAnagrams(s) {
    let sSubset = getStringSubset(s);
    let subsetCountMap = new Map();
    sSubset.forEach((subset) => {
        subsetCountMap.set(subset, subsetCountMap.get(subset) + 1 || 1);
    });
    let combinationSum = 0;
    for (let [key, value] of subsetCountMap.entries()) {
        if (value > 1) {
            const n = value;
            const r = 2;
            combinationSum += combination(n, r);
        }
    }
    return combinationSum;
}

function getStringSubset(s) {
    let baseArr = s.split('');
    let subset = [].concat(baseArr);
    for (let size = 2; size < s.length; size++) {
        for (let i = 0; i < s.length - size + 1; i++) {
            baseArr[i] = baseArr[i] + s[i+size-1];
            subset.push(baseArr[i].split('').sort().join(''));
        }
    }
    return subset;
}

function combination(n, r) {
    return n === r ? 1 : factorial(n) / (factorial(n - r) * factorial(r));
}

function factorial(n) {
    return [...new Array(n)]
        .map((value, index) => index + 1)
        .reduce((accumulator, value) => { return accumulator * value }, 1);
}
