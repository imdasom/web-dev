function getMaxLengthPalindrome(target) {
    let palindromeTable = [...Array(target.length)].map(function () {
        return [...Array(target.length).map(function () {
            return '';
        })];
    });
    for (let i = 0; i < target.length; i++) {
        for (let j = i; j < target.length; j++) {
            palindromeTable[i][j] = target.substring(i, j + 1);
        }
    }
    loopPalindromeTable(target.length, function setPalindrome(offset, i, j) {
        const isChildPalindrome = hasChildPalindrome(palindromeTable, i, j);
        const amIPalindrome = target.charAt(i) === target.charAt(j);
        palindromeTable[i][j] = isChildPalindrome && amIPalindrome ? 'T' : 'F';
    });
    let max = 0;
    loopPalindromeTable(target.length, function updateMax(offset, i, j) {
        if(palindromeTable[i][j] === 'T') {
            if ((offset + 1) > max) {
                max = offset + 1;
            }
        }
    });
    return max;
}

function loopPalindromeTable(length, callback) {
    for (let offset = 0; offset < length; offset++) {
        for (let i = 0, j = i + offset; j < length; i++, j = i + offset) {
            callback(offset, i, j);
        }
    }
}

function hasChildPalindrome(table, i, j) {
    while (i >= 0 && i + 1 < table.length && j - 1 >= 0 && j < table[0].length) {
        if (table[++i][--j] === 'F') {
            return false;
        }
    }
    return true;
}

console.log(getMaxLengthPalindrome('abaab'));