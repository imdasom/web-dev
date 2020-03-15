/**
 * 동적프로그래밍
 * dp[i][j]에 유효여부를 누적하여 저장한다.
 * i, j는 문자열의 인덱스
 * 
 * 유효여부는
 * 1. a[i].upperCase, b[j]가 같다면 dp[i][j]=true
 * 2. a[i]가 소문자이면 삭제가능하므로 참이며 && 이전까지의 문자열의 검사결과가 유효하다면 dp[i][j]=true
 * 
 * dp[a.length][b.length] = 마지막검사 결과가 유효하지 않으면 'NO', 유효하면 'YES'
 */
function abbreviation(a, b) {
    if (a.length < b.length) {
        return 'NO';
    }
    let dp = [...new Array(a.length + 1)]
        .map(()=>{ 
            return [...new Array(b.length + 1)].map(()=>{ return false; });
        })
    ;
    dp[0][0] = true;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {
            if (dp[i-1][j-1] && a.charAt(i-1).toUpperCase() === b.charAt(j-1)) {
                dp[i][j] = true;
            }
            if (a.charAt(i-1) >= 'a' && dp[i-1][j]) {
                dp[i][j] = true;
            }
        }
    }
    return dp[a.length][b.length] ? 'YES' : 'NO';
}
