function solution(participant, completion) {
    participant.sort();
    completion.sort();
    let uncompletionStack = [];
    for(let i = 0, j = 0; i < participant.length || j < completion.length;) {
        uncompletionStack.push(participant[i]);
        if(uncompletionStack[uncompletionStack.length - 1] === completion[j]) {
            uncompletionStack.pop();
            i++;
            j++;
        } else {
            return uncompletionStack[uncompletionStack.length - 1];
        }
    }
    return uncompletionStack[uncompletionStack.length - 1];
}
