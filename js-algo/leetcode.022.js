/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  function generateParenthesis(currentDepth, goalDepth, bracketList) {
    let newBracketList = [];
    bracketList.forEach(bracket => {
      for(let i = 0; i <= bracket.length; i++) {
        const newBracket = insertBracket(bracket, i, '()');
        newBracketList.push(newBracket);
      }
    });
    if(currentDepth < goalDepth - 1) {
      newBracketList = [...new Set(newBracketList)];
      newBracketList = generateParenthesis(currentDepth + 1, goalDepth, newBracketList);
    }
    return [...new Set(newBracketList)];
  }
  function insertBracket(bracketStr, i, newBracketStr) {
    if(i < 0) {
      throw new Error('index cannot access. i : ' + i);
    }
    let bracketChars = bracketStr.split('');
    if(bracketChars.length < i) {
      bracketChars.push(newBracketStr);
      return bracketChars.join('');
    } else {
      bracketChars.splice(i, 0, newBracketStr);
      return bracketChars.join('');
    }
  }
  if(n === 1) {
    return ['()'];
  }
  const currentDepth = 1;
  const goalDepth = n;
  const bracketList = ['()'];
  return generateParenthesis(currentDepth, goalDepth, bracketList);
};

// console.log(generateParenthesis(4));