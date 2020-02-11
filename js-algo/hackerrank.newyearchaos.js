// https://www.hackerrank.com/challenges/new-year-chaos/problem
function minimumBribes(q) {
    let bribe = 0;
    let tooChaotic = false;
    for (let i = 0; i < q.length; i++) {
        let greaterThan = 0;
        if(q[i] - (i + 1) < 0) {
            for (let j = 0; j < i; j++) {
               if(q[i] < q[j]) {
                    greaterThan++;
                }
            }
        }
        
        const bribeCountByIndex = (q[i] + greaterThan) - (i + 1);
        if (bribeCountByIndex > 2) {
            tooChaotic = true;
            console.log('Too chaotic');
            break;
        } else if (bribeCountByIndex > 0) {
            bribe += bribeCountByIndex;
        }
    }
    if(!tooChaotic) {
        console.log(bribe);
    }
}
