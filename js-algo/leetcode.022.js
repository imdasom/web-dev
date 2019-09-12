/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  let resultList = [];
  const defaultSize = n-1;
  let bracketList = [...Array.from(Array(defaultSize).keys()).map(v=>'('), ...Array.from(Array(defaultSize).keys()).map(v=>')')];
  for(let i = 0; i < bracketList.length; i++) {
    let newBracketList = bracketList.slice(0);
    newBracketList.splice(i, 0, '()');
    resultList.push(newBracketList.join(''));
  }
  let newBracketList = bracketList.slice(0);
  newBracketList.push('()');
  resultList.push(newBracketList.join(''));
  resultList.push([...Array.from(Array(n).keys()).map(v=>'()')].join(''));
  return [...new Set(resultList)];
};

console.log(generateParenthesis(4));